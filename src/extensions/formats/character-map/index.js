/**
 * Internal dependencies
 */
import CharacterMapControls from './components/controls';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;

/**
 * Block constants
 */
const name = 'editorskit/character-map';

export const characterMap = {
	name,
	title: __('Special Characters', 'block-options'),
	tagName: 'editorskitspecialcharacters',
	className: null,
	edit: CharacterMapControls,
};
