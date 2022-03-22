import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }) => (
  <div className="contentBlock">
    <Text tag="h2" className="display-4" field={fields.heading} />
    <p>This is a sample content updated in code directly</p>
    <h1>This is my sample h1</h1>
    <RichText className="contentDescription" field={fields.content} />
  </div>
);

export default ContentBlock;
