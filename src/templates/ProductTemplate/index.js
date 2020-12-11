import React, { useEffect, useState, useContext } from 'react';
import { graphql } from 'gatsby';
import { Layout, ImageGallery } from 'components';
import { Grid, SelectWrapper } from './styles';
import CartContext from 'context/CartContext';

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

  useEffect(() => {
    const { shopifyId } = data.shopifyProduct;

    getProductById(shopifyId).then(result => setProduct(result));
  }, [getProductById, setProduct]);

  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          {product?.availableForSale && (
            <SelectWrapper>
              <strong> Variant</strong>
              <select>
                {product?.variants.map(v => (
                  <option key={v.id}>{v.title}</option>
                ))}
              </select>
            </SelectWrapper>
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
