import { useState } from "react";
import styled from "styled-components";
import { LinkDoubleClick } from "../../components/link-double-click";
import { linksHome } from "../../utility/constants";
 

export const HomePage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Container>
      {linksHome.map((link) => (
        <AppLink
          to={link.link}
          key={link.label}
          onClick={() => setSelected(link.label)}
          selected={selected === link.label}
        >
          <AppIcon src={link.iconURL} alt={link.label} />
          <AppLabel>{link.label}</AppLabel>
        </AppLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 12px;
  gap: 40px;
`;

//nuevo componente de react que se logra pasándole estilos al componente LinkDoubleClick
const AppLink = styled(LinkDoubleClick)<{ selected: boolean }>`
  width: 120px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-shadow: ${({ selected }) =>
    selected ? "0 0 0 1px black" : "0 0 0 1px transparent"};
`;

//componente que se crea aplicamdo estilos a un elemento img
const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  aspect-ratio: 1 / 1;
`;

const AppLabel = styled.div`
  color: white;
  text-align: center;
`;

