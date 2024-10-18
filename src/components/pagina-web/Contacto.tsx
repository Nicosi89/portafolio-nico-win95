import styled from 'styled-components';
import { Boton } from './components/Boton';
import { Link } from 'react-router-dom';




export const Contacto = () => {
  return (
    <Section id='contacto'>
      <div>
        <Title>Trabajemos juntos</Title>
      </div>
      <FlexContainer>
        <TextoContacto>
          ¿Un proyecto digital en mente 🤔?
          <br></br><Spantexto>Hablemos 👇🏻 </Spantexto>
        </TextoContacto>
        <IconosContacto>
          <Link to={'https://wa.link/p6su7y'}>
            <img width={100} src='/images/WhatsApp_icon.png'></img>
          </Link>
          <Link to={'mailto:contactoboltapps@gmail.com'}></Link>
          <img width={90} height={90} src='/images/email.png'></img>
        </IconosContacto>
      </FlexContainer>

    </Section>
  );
};


const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex-wrap: wrap;
  padding-top: 50px;
  gap: 35px;
  max-width: var(--container-width); /* Assuming you have --container-width set */
`;

const Title = styled.h3`
  font-family: 'palanquin', sans-serif;
  color: #00ccff; /* slate-800 */
  font-size: 1.5rem; /* 2xl */
  font-weight: bold;
  padding-bottom: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px; /* 11rem */
  padding-bottom: 15px;
  justify-content: center;
align-items: center;
  
`;

const TextoContacto = styled.p`
 font-family: 'inter', sans-serif;
  color: #c1c2d3;
  font-size: 1.125rem; /* lg */
  line-height: normal;
  text-align: center;

`;

const Spantexto = styled.span`
    color: #ffea00;
`;

const IconosContacto = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;