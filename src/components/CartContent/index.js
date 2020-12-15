import React, { useContext } from 'react';
import CartContext from 'context/CartContext';
import { CartHeader, CartItem, CartFooter } from './styles';
import QuantityAdjuster from '../QuantityAdjuster';

const CartContent = () => {
  const { checkout, updateLineItem } = useContext(CartContext);

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId });
  };

  return (
    <section>
      <h1>Your Cart</h1>
      <CartHeader>
        <div>Product</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Amount</div>
      </CartHeader>
      {checkout &&
        checkout.lineItems?.map(lineItem => (
          <CartItem key={lineItem.variant.id}>
            <div>
              <div>{lineItem.title}</div>
              <div>
                {lineItem.variant.title === 'Default Title'
                  ? null
                  : lineItem.variant.title}
              </div>
            </div>
            <div>£{lineItem.variant.price}</div>
            <div>
              <QuantityAdjuster
                item={lineItem}
                onAdjust={handleAdjustQuantity}
              />
            </div>
            <div>
              £{(lineItem.quantity * lineItem.variant.price).toFixed(2)}
            </div>
          </CartItem>
        ))}
      <CartFooter>
        <div>
          <strong>Total: </strong>
        </div>
        <div>
          <span>£{checkout?.totalPrice}</span>
        </div>
      </CartFooter>
    </section>
  );
};

export { CartContent };
