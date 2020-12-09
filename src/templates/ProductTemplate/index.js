import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      title
      description
      id
    }
  }
`;

const ProductTemplate = ({ data }) => {
  console.log(data.shopifyProduct);
  return <h1>{data.shopifyProduct.title}</h1>;
};

export default ProductTemplate;
