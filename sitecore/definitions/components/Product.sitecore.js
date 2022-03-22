// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the Product component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'Product',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'productId', type: CommonFieldTypes.SingleLineText },
      { name: 'productName', type: CommonFieldTypes.SingleLineText },
      { name: 'productDescription', type: CommonFieldTypes.RichText },
      { name: 'productImage', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
