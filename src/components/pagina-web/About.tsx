import styled from 'styled-components';
import { textoGuiaPrincipalP1 } from '../../utility/constants';
import { Boton } from './components/Boton';

// Styled Components


// JSX Component
export const About = () => {
  return (
    <Section id="about">
      <Content>

        <InfoText>{textoGuiaPrincipalP1}</InfoText>
        <ButtonContainer>
          <Boton
            url="/pagina-web#contacto"
            label="Empezar un proyecto"
          />
        </ButtonContainer>
      </Content>

      <ImageWrapper>
        <Imagen
          src="/images/nico-2024.jpg"
          alt="product detail"


        />
      </ImageWrapper>

      {/*       <BackgroundBox />
 */}    </Section>
  );
};

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  
  padding-bottom: 5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 65%;
  padding-right: 30px;   

   @media (max-width: 450px) {
    padding-right: 0px;  
  }
`;


const InfoText = styled.p`
  font-family: 'inter', sans-serif;
  margin-top: 16px;
  max-width: 640px;
  color: #00ccff; 
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 400;

  @media (max-width: 450px) {
    text-align: center;
    margin-top: 100px;
  }



`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border: 5px;

`;
const Imagen = styled.img`
    width: 300px;
    border-radius: 1px 20px;
  `;

