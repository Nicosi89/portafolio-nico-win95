import styled from 'styled-components';
import { tituloHeroPrincipal } from '../../utility/constants';
export const Hero = () => {
    return (
        <Section id="hero">
            <TituloHero>
                <Title>
                    {tituloHeroPrincipal}
                    {/* <Highlight>{heroPrincipalRestaltado}</Highlight> */}
                </Title>
            </TituloHero>
            <SubtituloHero>
                <p>Tecnología web del siglo XXI para que el desarrollo de su proyecto digital sea ágil, transparente y tal como usted lo 
                  sueña</p>
            </SubtituloHero>
        </Section>
    );
};


const Section = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  
  
  
`;

const TituloHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;   
  width: 100%;
  padding-top: 56px;
  text-align: center;

  @media (max-width: 1280px) {
    padding-left: var(--padding-x);
    padding-right: var(--padding-x);
  }

  @media (min-width: 1280px) {
    width: 100%;
    padding-bottom: 9px;
  }
`;

//titulo en degradado
const Title = styled.h1`
  position: sticky;
  font-family: 'palaquin', sans-serif !important;
  min-width: 284px;
  font-size: 72px;
  font-weight: 700;
  line-height: 1.2;
  padding-right: 8px;
  z-index: 10;
  color: #00ccff;
  background: -webkit-linear-gradient(180deg, #00ccff, #ffea00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  

  @media (max-width: 450px) {
    font-size: 32px;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 72px;
  }

  @media (min-width: 1280px) {
    margin-top: 40px;
  }
`;



const SubtituloHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--marca-red);
  background-size: cover;
  background-position: center;
  padding-left: 16px;
  padding-right: 16px;
  color: #00ccff;
  font-family: 'inter', sans-serif;
  font-weight: 700;
  line-height: 1.3;
  width: 70%;
 text-align: center;
 font-size: 1.3rem;


  
`;

const NombreEnTitulo = styled.span`
  text-decoration-line: underline; 
`;
