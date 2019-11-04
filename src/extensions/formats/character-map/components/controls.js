/**
 * External dependencies
 */
import { get } from 'lodash';
// import { CharacterMap } from 'react-character-map';
import Chars from '../../../../../node_modules/react-character-map/dist/component/chars.json';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { getRectangleFromRange } = wp.dom;
const { Component, Fragment } = wp.element;
const { select, withSelect } = wp.data;
const { RichTextToolbarButton } = wp.blockEditor;
const { applyFormat, removeFormat, getActiveFormat } = wp.richText;
const { Toolbar, IconButton, Popover, ColorPalette } = wp.components;
const { compose, ifCondition } = wp.compose;

const name = 'editorskit/character-map';
const title = __('Special Characters', 'block-options');

class CharacterMapControls extends Component {
	constructor() {
		super(...arguments);

		this.toggle = this.toggle.bind(this);

		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState((state) => ({
			isOpen: !state.isOpen,
		}));
	}
	render() {
		const { isOpen } = this.state;
		const {
			value,
			onChange,
			isActive,
			onToggle,
		} = this.props;
		
		console.log(isOpen);
		return (
			<Fragment>
				<RichTextToolbarButton
					icon="editor-customchar"
					title={title}
					onClick={this.toggle}
					// isActive={isBlockJustified}
				/>
				{isOpen && (
					<Popover
						position="bottom center"
						className="components-editorskit__inline-character-map"
						focusOnMount="container"
						expandOnMobile={true}
						key="charmap-popover"
					>
						asdfasd
					</Popover>
				)}
			</Fragment>
		);
	}
}

export default compose(
	withSelect(() => {
		return {
			formatTypes: select('core/rich-text').getFormatTypes(),
			isDisabled: select('core/edit-post').isFeatureActive('disableEditorsKitColorsFormats'),
		};
	}),
	ifCondition((props) => {
		const checkFormats = props.formatTypes.filter((formats) => formats.name === 'special-characters/insertspecialcharacters');
		return !props.isDisabled && checkFormats.length === 0;
	}),
)(CharacterMapControls);
