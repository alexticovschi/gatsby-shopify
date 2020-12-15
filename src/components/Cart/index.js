import React, { useContext } from 'react';
import { CartWrapper } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from 'context/CartContext';
import { Link } from 'gatsby';

const Cart = () => {
  const { checkout } = useContext(CartContext);

  let totalQuantity = 0;

  if (checkout) {
    checkout.lineItems.forEach(
      lineItem => (totalQuantity = totalQuantity + lineItem.quantity)
    );
  }

  return (
    <CartWrapper>
      <div>
        <Link to="/cart">
          <FaShoppingCart size="1.5em" />
          <span>
            {totalQuantity} {totalQuantity > 1 ? ' items' : 'item'} / £
            {checkout?.totalPrice || '0.00'}
          </span>
        </Link>
      </div>
    </CartWrapper>
  );
};

export default Cart;
