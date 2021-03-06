/**
 * Internal dependencies
 */
import { justify } from './justify';
import { textColor } from './text-color';
import { backgroundColor } from './background-color';
import { markdown } from './markdown';
import { subscript } from './subscript';
import { superscript } from './superscript';
import { clear } from './clear';
import { uppercase } from './uppercase';
import { link } from './link';
import { alignment } from './alignment';
import { nbsp } from './nbsp';
import { abbreviation } from './abbreviation';
import { underline } from './underline';

/**
 * WordPress dependencies
 */
const { registerFormatType } = wp.richText;
const { select } = wp.data;

const isDisabled = select( 'core/edit-post' ).isFeatureActive( 'disableEditorsKitLinkFormats' );

function registerEditorsKitFormats() {
	[
		justify,
		textColor,
		backgroundColor,
		markdown,
		subscript,
		superscript,
		clear,
		uppercase,
		alignment,
		nbsp,
		abbreviation,
		underline,
		! isDisabled ? link : [],
	].forEach( ( { name, ...settings } ) => {
		if ( name ) {
			registerFormatType( name, settings );
		}
	} );
}

wp.domReady(
	registerEditorsKitFormats
);
