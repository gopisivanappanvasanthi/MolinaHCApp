import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const ProductFacet = (props) => (
  <div>
    <span>
      <h3>
        <Text field={props.fields.facetTitle} />
        (<Text field={props.fields.facetCount} />)
      </h3>
    </span>
  </div>
);

export default ProductFacet;
