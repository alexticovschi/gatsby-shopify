import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';

const Cart = () => {
  const { checkout } = useContext(CartContext);

  console.log(checkout);

  return (
    <CartWrapper>
      <FaShoppingCart size="1.5em" />
    </CartWrapper>
  );
};

export default Cart;
