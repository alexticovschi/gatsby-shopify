import React from 'react';
import {
  ProductTileWrapper,
  Title,
  Description,
  Price,
  StyledLink,
} from './styles';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

const ProductTile = ({ title, imageFluid, description, minPrice, handle }) => {
  return (
    <ProductTileWrapper>
      <Img fluid={imageFluid} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>£{parseFloat(minPrice).toFixed(2)}</Price>
      <StyledLink>
        <Link to={`/products/${handle}`}>View product</Link>
      </StyledLink>
    </ProductTileWrapper>
  );
};

export { ProductTile };
