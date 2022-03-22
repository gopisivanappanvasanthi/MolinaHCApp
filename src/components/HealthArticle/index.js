import React from 'react';
import { RichText, Text } from '@sitecore-jss/sitecore-jss-react';

const HealthArticle = (props) => (
  <div>
    <span>
      Published On: <Text field={props.fields.articlePublishedDate} />
    </span>
    <h1>
      <Text field={props.fields.articleTitle} />
    </h1>
    <b>
      <Text field={props.fields.articleBrief} />
    </b>
    <p>
      <RichText field={props.fields.articleDetails} />
    </p>
  </div>
);

export default HealthArticle;
