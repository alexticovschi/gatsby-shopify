import React, { useState } from 'react';
import Image from 'gatsby-image';
import ImageThumbnail from './ImageThumbnail';
import { ImageGalleryWrapper } from './styles';

const ImageGallery = ({ images }) => {
  const [activeImageThumbnail, setActiveImageThumbnail] = useState(images[0]);

  const handleClick = image => {
    setActiveImageThumbnail(image);
    console.log(activeImageThumbnail);
  };

  return (
    <ImageGalleryWrapper>
      <Image fluid={activeImageThumbnail.localFile.childImageSharp.fluid} />
      <div>
        {images.map(image => (
          <ImageThumbnail
            key={image.id}
            isActive={activeImageThumbnail.id === image.id}
            onClick={handleClick}
            image={image}
          />
        ))}
      </div>
    </ImageGalleryWrapper>
  );
};

export { ImageGallery };
