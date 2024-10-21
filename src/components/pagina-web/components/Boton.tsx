import styled from 'styled-components';
import { Link } from 'react-router-dom';


export function Boton({
    label,
    url,
}: {
    label: string;
    url: string;    
}) {
    return (
        <StyledLink reloadDocument
            to={url}
        >
            {label}
        </StyledLink>
    );
}


const StyledLink = styled(Link)`
  display: flex;
  justify-self: center;
  align-items: center;
  gap: 8px;
  padding: 16px 28px;
  margin: 24px 0;
  font-family: 'ubuntu', sans-serif;
  font-weight: 600;
  font-size: 1.125rem; /* 18px */
  line-height: 1;
  background: -webkit-linear-gradient(180deg, #00ccff, #ffea00);
 
  color: black;
  width: 190px;
    `

    ;



