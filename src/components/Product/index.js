import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';

const Product = (props) => (
  <div>
    <h1>
      <Text field={props.fields.productId} />
    </h1>
    <br />
    <p>
      <Text field={props.fields.productName} />
    </p>
    <RichText field={props.fields.productDescription} />
    <br />
    <Image field={props.fields.productImage} />
  </div>
);

export default Product;
