import { useGo } from "@refinedev/core";
import { Window, Button, WindowHeader, Separator, Anchor } from "react95";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { IconClose } from "../icons";
import { getImagesUrl } from "../../utility/get-cdn-url";

export const AboutWindow = () => {
  const { hash, pathname } = useLocation();
  const go = useGo();

  const onClose = () => {
    go({
      to: pathname,
      hash: undefined,
      type: "replace",
      options: {
        keepHash: false,
        keepQuery: true,
      },
    });
  };

  if (hash !== "#about") {
    return null;
  }

  return (
    <OverlayContainer>
      <Overlay />
      <Container>
        <Header>
          <TitleWrapper>
            <h2>About</h2>
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

              <InfoContainer>
                <p>¿Quieres una app como ésta?. Hablémos:</p>

                <InfoItem>
                  <TituloItem >
                    <InfoItemIcon src={getImagesUrl("/outlook_express-0.png")} />
                    <InfoItemLabel>Correo electrónico:</InfoItemLabel>
                  </TituloItem>
                  <div>
                    <Anchor href="https://refine.dev" target="_blank">
                      contactoboltapps@gmail.com
                    </Anchor>
                  </div>
                </InfoItem>
                <InfoItem>
                  <TituloItem >
                    <InfoItemIcon src={getImagesUrl("/pxArt.png")} />

                    <InfoItemLabel>WhatsApp:</InfoItemLabel>
                  </TituloItem>
                  <div>
                    <Anchor href="https://wa.link/p6su7y" target="_blank">
                      Escríbeme
                    </Anchor>
                  </div>
                </InfoItem>
              </InfoContainer>
              <CloseContainer>
                <CloseButton onClick={onClose}>Close</CloseButton>
              </CloseContainer>
            </AboutRightColumn>
          </AboutContent>
        </WindowContent>
      </Container>
    </OverlayContainer>
  );
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
  z-index: 2;
  box-sizing: border-box;
  padding: 16px;
`;

const Overlay = styled.div`
position: absolute;
inset: 0;
z-index: 0;
width: 100%;
height: 100%;
background-repeat: repeat;
background-size: 4px;
`;

const Container = styled(Window)`
  padding: 2px 2px;
  z-index: 3;
  max-width: 450px;
  min-width: 330px;
  width: 50%;
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
  gap: 24px;


`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media(max-width: 450px) {
    flex-direction: column;
    align-items: start;
  }
`;

const TituloItem = styled.div`
  display: flex;
  gap: 10px;
  
`;

const InfoItemIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const InfoItemLabel = styled.div`
  width: 100px;
`;



const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CloseButton = styled(Button)`
  width: 110px;
`;