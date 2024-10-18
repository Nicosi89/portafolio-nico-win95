import type { PropsWithChildren } from "react";
import { useGo, useNavigation } from "@refinedev/core";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react95";
//import { RVCSplashScreen } from "@/components/rvc-splash-screen";
import { AppLayout } from "./app-layout";
import { getImagesUrl } from "../../../utility/get-cdn-url";
import { TodayDate90sApp } from "../../today-date";

export const LayoutPelisApp = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const go = useGo();


  const links = [
    {
      icon: getImagesUrl("/search_file_2-4.png"),
      label: "Peliculas",
      href: go({
        to: {
          resource: 'peliculas',
          action: 'list'
        },
        type: 'path'
      }),
    },
    {
      icon: getImagesUrl("/certificate_2-0.png"),
      label: "Ranking",
      href: '/app/ranking',
    },
  ];

  return (
    <>
      <StyledAppLayout
        title="App Pelis"
        iconURL={getImagesUrl("/movie_maker-3.png")}
        onClose={() => navigate("/")}
        onMinimize={() => navigate("/")}
        menu={[
          {
            label: "Películas",
            children: [
              {
                label: "Ver películas",
                onClick: () => navigate("/app/peliculas"),
              },
              {
                label: "Ranking películas",
                onClick: () => navigate("/app/ranking"),
              },
            ],
          },

          {
            label: "Ayuda",
            children: [

              {
                label: "About",
                onClick: () =>
                  go({
                    hash: "about",
                    type: "replace",
                    options: { keepHash: false, keepQuery: true },
                    to: "",
                  }),
              },
            ],
          },
        ]}
      >
        <Container>
          <TodayDate />
          <HomeContainer>
            {/* TODO: logo juego */}
            <Logo
              src={getImagesUrl("/logo-app-pelis.png")}
              alt="refine video club logo"
            />

            <Links>
              {links.map((link) => {
                console.log(`link en Layout' ${link.href} de ${link.label}`)
                return <Link to={link.href!} key={link.label}>
                  <LinkItem>
                    <LinkItemImg src={link.icon} alt={link.label} />
                    <LinkItemLabel>{link.label}</LinkItemLabel>
                  </LinkItem>
                </Link>
              })}
            </Links>
          </HomeContainer>

          {children}
        </Container>
      </StyledAppLayout>
      {/* <RVCSplashScreen /> */}
    </>
  );
};

const StyledAppLayout = styled(AppLayout)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background-image: url(${getImagesUrl("/noisy-gray.png")});
  background-repeat: repeat;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: auto 0;
`;

const Logo = styled.img`
  user-select: none;
  margin-right: auto;
  margin-left: auto;
  width: 476px;
  height: 200px;
`;

const TodayDate = styled(TodayDate90sApp)`
  position: absolute;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: 8px;
  margin-top: 8px;
`;

const Links = styled.div`
  width: 100%;
  max-width: 608px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const LinkItem = styled(Button)`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: unset;
`;

const LinkItemImg = styled.img`
  width: 80px;
  height: 80px;
`;

const LinkItemLabel = styled.div`
  padding: 1px 0;
  white-space: nowrap;
`;