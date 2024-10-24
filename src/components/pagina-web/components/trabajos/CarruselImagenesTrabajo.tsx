import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageCarouselProps {
  images: string[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <CarouselContainer>
      <ImageWrapper>
        <Image src={images[currentImageIndex]} alt={`Imagen ${currentImageIndex + 1}`} />
      </ImageWrapper>
      <Button onClick={handlePrev}>Anterior</Button>
      <Button onClick={handleNext}>Siguiente</Button>
    </CarouselContainer>
  );
};



const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
