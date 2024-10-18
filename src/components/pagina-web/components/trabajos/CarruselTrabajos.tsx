"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { useOutsideClick } from "../../../../hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  descripcion: string;
  tecnologias: string[];
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => { },
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <CarouselWrapper>
        <CarouselContainer ref={carouselRef} onScroll={checkScrollability}>

          <CarouselItems>
            {items.map((item, index) => (
              <CarouselItem
                key={"card" + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
              >
                {item}
              </CarouselItem>
            ))}
          </CarouselItems>
        </CarouselContainer>
        <ButtonWrapper>
          <ArrowButton onClick={scrollLeft} disabled={!canScrollLeft}>
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </ArrowButton>
          <ArrowButton onClick={scrollRight} disabled={!canScrollRight}>
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </ArrowButton>
        </ButtonWrapper>
      </CarouselWrapper>
    </CarouselContext.Provider>
  );
};

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  overscroll-behavior-x: auto;
  padding: 2.5rem 0; /* py-10 */
  scroll-behavior: smooth;

  

  /* Hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;



const CarouselItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  max-width: 1280px; /* max-w-7xl */
  margin: 0 auto;

  /* Option to remove max-width */
  /* Remove max-width if you want the carousel to span the full width */
`;

const CarouselItem = styled(motion.div)`
  padding-right: 5%;
  border-radius: 1.5rem; /* rounded-3xl */

  @media (min-width: 768px) {
    padding-right: 8%; /* md:last:pr-[33%] */
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-right: 2.5rem;
`;

const ArrowButton = styled.button`
  position: relative;
  z-index: 40;
  height: 2.5rem; /* h-10 */
  width: 2.5rem; /* w-10 */
  border-radius: 9999px; /* rounded-full */
  background-color: #f3f4f6; /* bg-gray-100 */
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    opacity: 0.5;
  }
`;


export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose, currentIndex } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <ModalWrapper>
            <ModalBackground
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <ModalContent
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
            >
              <CloseButton onClick={handleClose}>
                <IconXStyled />
              </CloseButton>
              <div>{card.content}</div>
              <ContainerTitleCard>
                <ParagraphTitleCard>
                  <SpanTitleCard>
                    {card.title}
                  </SpanTitleCard>
                </ParagraphTitleCard>
                <CardDescription>{card.descripcion}</CardDescription>
                <CardDescription>Tecnologías: {card.tecnologias}</CardDescription>
              </ContainerTitleCard>
            </ModalContent>
          </ModalWrapper>
        )}
      </AnimatePresence>

      <CardButton
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
      >
        {/* <GradientOverlay /> */}
        <Content>
          <CardTextWrapper>
            <CardCategory layoutId={layout ? `category-${card.category}` : undefined}>
              {card.title}
            </CardCategory>
            <CardTitle layoutId={layout ? `title-${card.title}` : undefined}>
              {card.category}
            </CardTitle>
          </CardTextWrapper>
          <ImageWrapper>
            <CardImage width={800} src={card.src} alt={card.title} />
          </ImageWrapper>
        </Content>
      </CardButton>
    </>
  );
};

// Styled Components
const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  height: 100vh;
  z-index: 50;
  overflow: auto;
`;

const ModalBackground = styled(motion.div)`
  background-color: red; /* #93dd6c; */
  backdrop-filter: blur(20px);
  height: 100%;
  width: 100%;
  position: fixed;
  inset: 0;
`;

const ModalContent = styled(motion.div)`
  max-width: 90rem; 
  background-color: #00ccff;  /* #93dd6c; */
  padding: 1.8rem; /* p-5 */
  border-radius: 0.25rem; /* rounded-sm */
  position: relative;
  z-index: 60;

  /* @media (min-width: 768px) {
    padding: 1.25rem;
  } */
`;

const CloseButton = styled.button`
  position: sticky;
  top: 1rem;
  margin-left: auto;
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
  background-color: black;
  border-radius: 9999px; /* rounded-full */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconXStyled = styled(IconX)`
  height: 1.5rem; /* h-6 */
  width: 1.5rem;  /* w-6 */
  color: white; /* text-neutral-100 */

  /* Dark mode styles */
  @media (prefers-color-scheme: dark) {
    color: white; /* dark:text-neutral-900 */
  }
`;

const ContainerTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem; /* gap-3 */
  align-items: flex-start;
`;

const ParagraphTitleCard = styled.p`
  color: black; /* text-black */
  font-size: 1rem; /* text-base */

  @media (min-width: 768px) {
    font-size: 1.125rem; /* md:text-lg */
  }

  max-width: 48rem; /* max-w-3xl */
  text-align: start; /* text-start */
`;

const SpanTitleCard = styled.span`
  font-weight: bold; /* font-bold */
  font-family: 'ubuntu', sans-serif; /* font-ubuntu */
  font-size: 1.125rem; /* text-lg */
  color: #1e293b; /* text-neutral-700 */

  
`;


const CardDescription = styled.p`
  color: black;
  font-size: 1.125rem; /* text-xl */
  font-weight: 600; /* font-semibold */
  line-height: normal;
  font-family: 'inter', sans-serif; /* font-ubuntu */
`;

const CardButton = styled(motion.button)`
  border-radius: 3px;
  height: 15rem; /* h-60 */
  width: 18rem; /* w-72 */
  overflow: hidden;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
  background-color: #ffea00;
  padding-left: 0px;
    padding-top: 0px;

  @media (min-width: 768px) {
    height: 25rem;
    width: 40rem;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem; /* p-8 */
  gap: 20px;
`;



const CardTextWrapper = styled.div`
  position: relative;
  z-index: 40;
  
`;

const CardCategory = styled(motion.p)`
  color: black;
  font-size: 0.875rem; /* text-sm */
  font-family: 'ubuntu', sans-serif; /* font-ubuntu */
  font-weight: 500; /* font-medium */
  text-align: left;
  margin-bottom: 5px;
  

  @media (min-width: 768px) {
    font-size: 1rem; /* md:text-base */
  }
`;

const CardTitle = styled(motion.p)`
  color: black;
  font-size: 1.25rem; /* text-xl */
  font-weight: 600; /* font-semibold */
  max-width: 15rem; /* max-w-xs */
  text-align: left;
  line-height:28px;

  @media (min-width: 768px) {
    font-size: 1.875rem; /* md:text-3xl */
  }
`;

const ImageWrapper = styled.div`

  z-index: 10;
`;

const CardImage = styled.img`
  object-fit: cover;
  inset: 0;
  z-index: 10;
`;


