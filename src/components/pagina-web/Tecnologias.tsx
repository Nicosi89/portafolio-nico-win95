import styled from 'styled-components';
import { tecnologias, ventajas } from '../../utility/constants';



export const Tecnologias = () => {
  return (
    <Section id={'tecnologias'}>
      <div>
        <Title>Tecnologías</Title>
      </div>

      <ContenedorTrabajos >
        {tecnologias.map((tecnologia) => (
          <img width={200} src={tecnologia.logoURL} />
        ))}
      </ ContenedorTrabajos >
      
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
  padding-bottom: 10em;
`;

const Title = styled.h3`
  font-family: 'palanquin', sans-serif;
  color: #00ccff; /* slate-800 */
  font-size: 1.5rem; /* 2xl */
  font-weight: bold;
  padding-bottom: 5px;
`;

const IconosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 15px;

  @media (min-width: 640px) {
    flex-direction: column;
  }
`;
const ContenedorTrabajos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 15px;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

