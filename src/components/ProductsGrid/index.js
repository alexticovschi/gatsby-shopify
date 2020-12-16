import React from 'react';
import { ProductsGridWrapper } from './styles';
import { ProductTile } from 'components';

const ProductsGrid = ({ products }) => {
  return (
    <ProductsGridWrapper>
      {products.map(product => (
        <ProductTile
          handle={product.handle}
          minPrice={product.priceRange.minVariantPrice.amount}
          key={product.shopifyId}
          imageFluid={product.images[0].localFile.childImageSharp.fluid}
          title={product.title}
          description={product.description}
        />
      ))}
    </ProductsGridWrapper>
  );
};

export { ProductsGrid };
