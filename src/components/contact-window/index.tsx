import { useGo } from "@refinedev/core";
import { Window, Button, WindowHeader, Separator, Anchor } from "react95";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { IconClose } from "../icons/close";
import { getImagesUrl } from "../../utility/get-cdn-url";
import { useEffect, useState } from "react";

export const AboutWindowHome = () => {
  const { hash, pathname } = useLocation();


  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    // Verificamos si el usuario ya ha visitado la página
    const haVisitado = localStorage.getItem("hasVisited");

    if (!haVisitado) {
      // Si no ha visitado, mostramos el componente y guardamos la visita
      setMostrar(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);


  const onClose = () => {
    setMostrar(false);
    
  };

  

  return mostrar ? (
    <OverlayContainer>
      <Overlay />
      <Container>
        <Header>
          <TitleWrapper>
            <h2></h2>
          </TitleWrapper>
          <HeaderActions>
            <Button onClick={onClose}>
              <IconClose />
            </Button>
          </HeaderActions>
        </Header>
        <WindowContent>
          <AboutContent>
            
            <AboutRightColumn>
              <AboutLabelContainer>
                Hola, te doy la bienvenida👋🏻! Esta es la página web del portafolio dev 🧑🏻‍💻 de Nicolás Sicard.
                Si el diseño te transporta a otros tiempos, esa es la idea!. Solo quería hacerla un poco diferente
                y recurrí a la nostalgia noventera como inspiración.💫
                <br></br> <SpanContainer >Encontrarás además de la página de portafolio  (la real) una sencilla y divertida app para 
                votar por las dos películas 📽️ que más te marcaron de la década de los noventas y ochentas. 
                Mucha suerte con tus favoritas!</SpanContainer>
              </AboutLabelContainer>
              
              
            </AboutRightColumn>
          </AboutContent>
        </WindowContent>
      </Container>
    </OverlayContainer>
  ) : null

};

const Header = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  user-select: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: -2px;
`;

const OverlayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  box-sizing: border-box;
  padding: 16px;
`;

const Overlay = styled.div`
position: absolute;
inset: 0;
z-index: 0;
width: 100%;
height: 100%;
background-image: url(${getImagesUrl("/tile.png")});
background-repeat: repeat;
background-size: 4px;
`;

const Container = styled(Window)`
  padding: 2px 2px;
  z-index: 3;
  max-width: 744px;
  width: 100%;
  height: auto;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`;

const WindowContent = styled.div`
  flex: 1;
  overflow: auto;
  margin-right: 3px;
  margin-bottom: 2px;
`;

const AboutContent = styled.div`
  display: flex;
  padding: 18px;
  gap: 48px;
`;



const AboutRightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  
`;

const AboutLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SpanContainer = styled.span`
  margin-top: 4px;
`;


const CloseContainer = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CloseButton = styled(Button)`
  width: 110px;
`;