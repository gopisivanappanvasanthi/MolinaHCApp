import React from 'react';
import { RichText, Text, Image } from '@sitecore-jss/sitecore-jss-react';

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomingProps: props,
    };
  }

  render() {
    const productLists = this.state.incomingProps.fields.productList;
    return (
      <div>
        {productLists &&
          productLists.map((listItem, index) => (
            <div key={`localProductItem-${index}`}>
              <h2>
                <Text field={listItem.fields.productName} />
              </h2>
              <p>
                <RichText field={listItem.fields.productDescription} />
              </p>
              <Image
                field={listItem.fields.productImage}
                srcSet={[{ mw: 70 }, { mw: 50 }]}
                sizes="(min-width: 100px) 70px, 50px"
                className="img-fluid"
              />
            </div>
          ))}
      </div>
    );
  }
}
export default ProductListing;
