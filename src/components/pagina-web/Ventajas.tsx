import styled from 'styled-components';
import { Boton } from './components/Boton';
import { ventajas } from '../../utility/constants';
import { TarjetaVentajas } from './components/TarjetaVentajas';



export const Ventajas = () => {
  return (
    <Section id='ventajas'>
      <div>
        <Title>Que obtendrás de mí</Title>
      </div>
      <FlexContainer>
        {ventajas.map((ventaja) => (
          <TarjetaVentajas key={ventaja.label} {...ventaja} />
        ))}
      </FlexContainer>
      <Boton url="" label="Empezar un proyecto" />
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
  margin-bottom: 15rem;
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

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;