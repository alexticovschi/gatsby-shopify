import styled from 'styled-components';

export const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 17px;

  div {
    padding: 10px;
  }
`;

export const CartItem = styled.div`
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr 40px;

  > div {
    padding: 10px;

    &:first-child {
      div:first-child {
        font-weight: bold;
      }
      div:last-child {
        color: #999;
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }
`;

export const CartFooter = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 40px;

  div {
    padding: 10px;

    &:first-child {
      text-align: right;
    }
  }
`;
