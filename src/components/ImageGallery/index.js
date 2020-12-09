import React from 'react';
import Image from 'gatsby-image';
import ImageThumbnail from './ImageThumbnail';
import { ImageGalleryWrapper } from './styles';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ImageGalleryWrapper>
      <Image fluid={images[0].localFile.childImageSharp.fluid} />
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            image={image.localFile.childImageSharp.fluid}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
};

export { ImageGallery };
