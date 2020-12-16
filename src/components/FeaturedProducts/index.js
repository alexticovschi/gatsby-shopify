import React, { useContext } from 'react';
import { ProductsGrid } from 'components';
import ProductContext from 'context/ProductContext';

const FeaturedProducts = () => {
  const { collections } = useContext(ProductContext);

  const featuredCollection = collections.find(
    collection => collection.title === 'Featured Hats'
  );

  console.log(featuredCollection);

  return (
    <section>
      <h1>Featured Hats</h1>
      <ProductsGrid products={featuredCollection.products} />
    </section>
  );
};

export { FeaturedProducts };
