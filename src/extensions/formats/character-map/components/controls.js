/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
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
		} = this.props;

		return (
			<RichTextToolbarButton
				icon="editor-customchar"
				title={title}
				onClick={() => {} }
				// isActive={isBlockJustified}
			/>
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
