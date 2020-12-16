import styled from 'styled-components';

export const ProductTileWrapper = styled.section`
  border: 1px solid #ddd;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  overflow: hidden;
  flex-direction: column;
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 20px;
  margin: 20px;
`;

export const Description = styled.div`
  color: #6d6d6d;
  font-size: 15px;
  text-align: left;
  padding: 0 20px 10px 20px;
`;

export const Price = styled.div`
  font-weight: bold;
  padding: 20px;
  margin-top: auto;
`;

export const StyledLink = styled.div`
  a {
    background-color: #000;
    color: #fff;
    font-size: 17px;
    padding: 10px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
`;
