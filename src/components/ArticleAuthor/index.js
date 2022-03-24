import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import { withTranslation } from 'react-i18next';

class ArticleAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomingProps: props,
    };
  }
  render() {
    const articleAuthorField = this.state.incomingProps.fields.articleAuthor;
    return (
      <div>
        {this.state.incomingProps.t('AuthorNameLabel')}
        <h3>
          <Text field={articleAuthorField.fields.authorName} />
          {'('}
          <Text field={articleAuthorField.fields.authorDesignation} />
          {')'}
        </h3>
      </div>
    );
  }
}
export default withTranslation()(ArticleAuthor);
