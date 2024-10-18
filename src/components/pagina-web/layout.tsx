import type { PropsWithChildren } from "react";
import styled from "styled-components";
import { Link as ReactRouterLink } from "react-router-dom";
import { getImagesUrl } from "../../utility/get-cdn-url";

type Props = {
  withBrowser?: boolean;
};

export const PaginaWebLayout = ({
  withBrowser = true,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <Page>
      <Container>
        <ContainerLinkList>
          <Link>
            <ReactRouterLink
              to="/pagina-web#hero"

            >
              Home
            </ReactRouterLink>
          </Link>
          <Link>
            <a
              href="/pagina-web#trabajos"
              rel="noopener noreferrer"
            >

              Mi trabajo
            </a>
          </Link>
          <Link>
            <a
              href="/pagina-web#tecnologias"
              rel="noopener noreferrer"
            >
              Tecnologías
            </a>
          </Link>
          <Link>
            <a
              href="/pagina-web#contacto"

              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </Link>

        </ContainerLinkList>
        {children}
      </Container>
    </Page>
  );
};

const Page = styled.div`
  background-color: black;
  background-image: url(${getImagesUrl("/stars.gif")});
`;

const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerLinkList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  padding: 2px;
  border: 2px solid;
  gap: 2px;

  @media (max-width: 470px) {
    flex-direction: column;
  
`;

const Link = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  justify-content: center;
  width: max-content;
  padding: 6px 12px;
  color: #00ccff;
  font-weight: normal;
  font-size: 1.125rem;
  
`;