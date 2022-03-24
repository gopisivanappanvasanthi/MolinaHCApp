import React from 'react';
import { RichText, Text, DateField } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

const HealthArticle = (props) => (
  <div>
    <span>
      {props.t('PublishedOnLabel')}{' '}
      <DateField
        field={props.fields.articlePublishedDate}
        render={(date) => date.toLocaleDateString()}
      />
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

export default withTranslation()(HealthArticle);
