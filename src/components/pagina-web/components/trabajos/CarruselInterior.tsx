import React, {
    useEffect,

} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import styled from "styled-components";


interface CarouselProps {
    imagenesUrl?: string[];
    videoUrl?: string;
    initialScroll?: number;
}


export const CarouselInterior = ({ imagenesUrl, videoUrl, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

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

    //dando click en la flecha para que haga scroll 
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

    const isMobile = () => {
        return window && window.innerWidth < 478;
    };

    return (

        <CarouselWrapper>
            <CarouselContainer ref={carouselRef} onScroll={checkScrollability}>

                <CarouselItems>
                    {imagenesUrl &&
                        imagenesUrl.map((imagen, index) => {
                            if (isMobile()) {
                                return <motion.img
                                    src={imagen}
                                    height={200}
                                    width={400}
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
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
                                    key={"imagen" + index}
                                />
                            } else return <motion.img
                                src={imagen}
                                height={400}
                                width={800}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
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
                                key={"imagen" + index}
                            />
                        }
                        )

                    }

                    {videoUrl && (
                        <motion.video
                            src={videoUrl}
                            height={400}
                            width={800}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2,
                                    ease: "easeOut",
                                    once: true,
                                },
                            }}
                            controls
                            key={"video"}
                        />
                    )}
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
    );
};

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll; 
  z-index: 100;
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
  margin: 0 auto;
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