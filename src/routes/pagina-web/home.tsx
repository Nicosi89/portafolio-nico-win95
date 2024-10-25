import { Fragment } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import "swiper/css";

import { Navegador } from "../../components/navegador";
import { Hero } from "../../components/pagina-web/Hero";
import { PaginaWebLayout } from "../../components/pagina-web";
import { About } from "../../components/pagina-web/About";
import { Ventajas } from "../../components/pagina-web/Ventajas";
import { TarjetasTrabajos } from "../../components/pagina-web/components/trabajos";
import { Tecnologias } from "../../components/pagina-web/Tecnologias";
import { Contacto } from "../../components/pagina-web/Contacto";
//import { PaginaWebLayout } from "./components/pagina-web";

type Props = {
  withBrowser?: boolean;
};

export const PaginaWebPageHome = ({ withBrowser = true }: Props) => {
  const navigate = useNavigate();

  //aquí el layout del navegador
  const Wrapper = withBrowser ? Navegador : Fragment;

  return (
    <Wrapper
      title="Página Portafolio Dev Nicolás Sicard"
      onClose={() => navigate("/")}
      address="http://www.nicosicarddev.com/index.html"
    >
      <PaginaWebLayout withBrowser={withBrowser}>
        <Hero />
        <About />
        <Ventajas />
        <TarjetasTrabajos titulo="Trabajos" tipo="" />
        <Tecnologias />
        <Contacto />
      </PaginaWebLayout>

    </Wrapper>
  );
};