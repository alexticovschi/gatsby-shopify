import styled from 'styled-components';

export const ImageGalleryWrapper = styled.section`
  > div:first-child {
    border: 1px solid #ccc;
  }

  > div:last-child {
    margin-top: 5px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
