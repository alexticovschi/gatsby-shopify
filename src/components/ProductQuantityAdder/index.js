import React, { useState, useContext } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Input, Button } from 'components';
import CartContext from 'context/CartContext';

const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);
  const { updateLineItem } = useContext(CartContext);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // add product to cart
    updateLineItem({ variantId, quantity: parseInt(quantity, 10) });
  };

  return (
    <ProductQuantityAdderWrapper>
      <strong>Quantity</strong>
      <form onSubmit={handleSubmit}>
        <Input
          disabled={!available}
          value={quantity}
          onChange={handleQuantityChange}
          type="number"
          min="1"
          step="1"
        />
        <Button type="submit" disabled={!available}>
          Add to cart
        </Button>
      </form>
    </ProductQuantityAdderWrapper>
  );
};

export { ProductQuantityAdder };
