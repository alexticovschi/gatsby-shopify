import React from 'react';
import Image from 'gatsby-image';
import { ImageGalleryWrapper } from './styles';
const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ImageGalleryWrapper>
      <Image fluid={images[0].localFile.childImageSharp.fluid} />
    </ImageGalleryWrapper>
  );
};

export { ImageGallery };
