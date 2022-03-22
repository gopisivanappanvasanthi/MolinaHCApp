import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-manifest';

export default function (manifest) {
  manifest.addComponent({
    name: 'ProductFacet',
    icon: SitecoreIcon.Airplane,
    fields: [
      { name: 'facetTitle', type: CommonFieldTypes.SingleLineText },
      { name: 'facetCount', type: CommonFieldTypes.SingleLineText },
    ],
  });
}
