import styled from 'styled-components';

export const TarjetaVentajas = ({

  label,
  subtext,
}: {
  label: string;
  subtext: string;
}) => {
  return (
    <CardContainer>
      
      <Title>{label}</Title>
      <Subtext>{subtext}</Subtext>
    </CardContainer>
  );
};


const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  box-shadow: var(--shadow-ml); /* Assuming this is defined in your theme */
  padding: 24px 40px; /* 16rem x 10rem */
  border-radius: 1rem; /* 2xl */
  border: 1px solid #334155; /* slate-800 */
  flex-shrink: 0;
  padding: 2rem; /* p-5 */
}

@media (min-width: 768px) { /* md breakpoint */
  
    padding: 4rem; /* p-16 */
    width: 60vw;
  }
}

`;



const Title = styled.h3`
  
  font-family: 'palanquin', sans-serif;
  font-size: 1.875rem; /* 3xl */
  color: #00ccff; 
  font-weight: bold;
  line-height: normal;
`;

const Subtext = styled.p`
  margin-top: 12px; /* 3rem */
  word-break: break-word;
  font-family: 'inter', sans-serif;
  color: #c1c2d3;
  font-size: 1.125rem; /* lg */
  line-height: normal;
`;