/* eslint-disable jsx-a11y/no-onchange */

import React, { useEffect, useState, useContext } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper, Price } from './styles';
import CartContext from 'context/CartContext';
import { navigate, useLocation } from '@reach/router';

export const query = graphql`
  query ProductQuery($shopifyId: String) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      shopifyId
      title
      description
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const { shopifyId } = data.shopifyProduct;

    getProductById(shopifyId).then(result => {
      setProduct(result);
      setSelectedVariant(result.variants[0]);
    });
  }, [getProductById, setProduct, data.shopifyProduct]);

  const handleVariantChange = e => {
    setSelectedVariant(product?.variants.find(v => v.id === e.target.value));
  };

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <>
              <SelectWrapper>
                <strong>Variant</strong>
                <select onChange={handleVariantChange}>
                  {product?.variants.map(v => (
                    <option key={v.id} value={v.id}>
                      {v.title}
                    </option>
                  ))}
                </select>
              </SelectWrapper>
              {!!selectedVariant && <Price>£{selectedVariant?.price}</Price>}
            </>
          )}
        </div>
        <div>
          <ImageGallery images={data.shopifyProduct.images} />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;
