// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

/**
 * Adds the HealthArticle component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.js) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function (manifest) {
  manifest.addComponent({
    name: 'HealthArticle',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'articleTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'articleBrief', type: CommonFieldTypes.SingleLineText },
      { name: 'articleDetails', type: CommonFieldTypes.RichText },
      { name: 'articlePublishedDate', type: CommonFieldTypes.DateTime },
      { name: 'articleAuthor', type: CommonFieldTypes.ItemLink },
      { name: 'articleTags', type: CommonFieldTypes.ContentList },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
