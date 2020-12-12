import React, { useState } from 'react';
import { ProductQuantityAdderWrapper } from './styles';
import { Input, Button } from 'components';

const ProductQuantityAdder = ({ variantId, available }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
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
