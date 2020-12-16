import React from 'react';
import CollectionTile from '../CollectionTile';
import { RemainingCollections } from './styles';

const HomepageCollectionsGrid = ({ collections }) => {
  const saleCollection = collections.find(c => c.title === 'SALE');
  const remainingCollections = collections.filter(c => c.title !== 'SALE');

  return (
    <div>
      {!!saleCollection && (
        <CollectionTile
          sale
          title={saleCollection.title}
          description={saleCollection.description}
          backgroundImage={saleCollection.image.localFile.childImageSharp.fluid}
        />
      )}
      <RemainingCollections>
        {remainingCollections.map(col => (
          <CollectionTile
            key={col.shopifyId}
            title={col.title}
            description={col.description}
            backgroundImage={col.image.localFile.childImageSharp.fluid}
          />
        ))}
      </RemainingCollections>
    </div>
  );
};

export { HomepageCollectionsGrid };
