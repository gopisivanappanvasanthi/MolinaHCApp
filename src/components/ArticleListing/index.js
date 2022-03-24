import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

class ArticleListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomingProps: props,
    };
  }
  render() {
    const articleLists = this.state.incomingProps.fields.items;
    return (
      <div>
        {articleLists &&
          articleLists.map((listItem, index) => (
            <div key={`localArticleItem-${index}`}>
              <h2>
                <a href={listItem.url}>
                  <Text field={listItem.fields.articleTitle} />
                </a>
              </h2>
              <p>
                <RichText field={listItem.fields.articleBrief} />
              </p>
            </div>
          ))}
      </div>
    );
  }
}
export default ArticleListing;
