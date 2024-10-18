import styled from "styled-components";
import { TarjetaTrabajo } from "../../types";
import { Card, Carousel } from "./components/trabajos/CarruselTrabajos";
import { CarouselInterior } from "./components/trabajos/CarruselInterior";
import { Boton } from "./components/Boton";

//entry point
export function TarjetasTrabajos({
    tipo,
    titulo
}: {
    tipo: string,
    titulo: string
}) {
    const dataPorTipo = dataTarjetasTrabajos.filter((tarjeta) => tarjeta.tipo === tipo)
    let tarjetasPorTipo: JSX.Element[];
    if (dataPorTipo.length != 0) {
        tarjetasPorTipo = dataPorTipo.map((card, index) => (
            <Card key={card.src} card={card} index={index} />
        ));
    } else {
        tarjetasPorTipo = dataTarjetasTrabajos.map((card, index) => (
            <Card key={card.src} card={card} index={index} />))
    }

    return (
        <GeneralContainer id={'trabajos'}>
            <Titulo>
                {titulo}
            </Titulo>
            <Carousel items={tarjetasPorTipo} />
            <Boton url="" label="Empezar un proyecto" />
        </GeneralContainer>
    );
}

const GeneralContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;          /* w-full */
    height: 100%;         /* h-full */
    padding-bottom: 5rem; /* py-20 */
        
  `;

const Titulo = styled.div`
    font-family: 'palanquin', sans-serif;
  color: #00ccff; /* slate-800 */
  font-size: 1.5rem; /* 2xl */
  font-weight: bold;
  padding-bottom: 5px;
  text-align: center; 
  `;



//componente contenido tarjetas
const Content = ({ title, imgsUrl, videoUrl }: { title: string, imgsUrl?: string[], imgAlt: string, videoUrl?: string }) => {
    return (
        <>
            <Contenido
                key={title}
            >
                <CarouselInterior imagenesUrl={imgsUrl} videoUrl={videoUrl} />
            </Contenido>
        </>
    );
};


const Contenido = styled.div`
    background-color: #00ccff;
`;

//lista de trabajos
const dataTarjetasTrabajos: TarjetaTrabajo[] = [
    {
        tipo: 'app-web',
        category: "Página Web Portafolio",
        title: "Web App",
        src: "/imagenes-trabajos/portafolio-portada.jpg",
        descripcion: "Desarrollo full stack de la página portafolio con mini app. UI vintage usando paquete Win95, optimización front-end usando Redine.dev y ruteo de React Router",
        content: <Content title="Prueba2" imgAlt="Podcaster App" imgsUrl={[
            '/imagenes-trabajos/portafolio-1.jpg',
            '/imagenes-trabajos/portafolio-2.jpg',
            
            ]} />,
        tecnologias: ['Refine, Win95, React Router, Styled Components']

    },
    {
        tipo: 'app-web',
        category: "E-Learning Emprendedores",
        title: "Web App",
        src: "/imagenes-trabajos/plataforma-emprendedores/portada.jpg",
        descripcion: "Desarrollo full stack del producto mínimo viable (MVP) para una app web de e-learning con funcionalidades de administración de usuarios y por roles (Clerk), editor de texto con markdown (Lexical), SSR (Next.js), UI responsiva (Tailwind) y backend (Convex), entre otras",
        content: <Content title="Prueba2" imgAlt="Podcaster App" imgsUrl={[
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e1.jpeg.png',
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e2.png',
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e3.png',
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e4.png',
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e5.png',
            '/imagenes-trabajos/plataforma-emprendedores/plataforma-e6.png'
            ]} />,
        tecnologias: ['React, Next.js, Tailwind, Clerk, Lexical y Convex']

    },
    {
        tipo: 'app-web',
        category: "Podcastr",
        title: "AI Web App",
        src: "/imagenes-trabajos/podcastr.jpeg",
        descripcion: "Desarrollo full stack del producto mínimo viable (MVP) para la app web con inteligencia artificial Podcastr (EEUU)",
        content: <Content title="Prueba2" imgAlt="Podcaster App" imgsUrl={['./imagenes-trabajos/podcastr.jpeg']} videoUrl="./videos-trabajos/podcastr.mp4" />,
        tecnologias: ['React, Next.js, Tailwind, Convex, OpenAI']

    },
    {
        tipo: 'tienda-online',
        category: "Fire and Ice",
        title: "Ecommerce Responsive",
        src: "/imagenes-trabajos/ahora-fandi.png",
        descripcion: "Rediseño completo de sitio de ecommerce en desktop y mobile para la marca de moda independiente Fire and Ice con personalización de diseño web",
        content: <Content title="Prueba" imgAlt="Prueba" imgsUrl={['/imagenes-trabajos/ahora-fandi.png', '/imagenes-trabajos/ahoraF&I-3.png.jpg', '/imagenes-trabajos/ahora-antes-mobile-f&I.jpg', '/imagenes-trabajos/ahora-antes-pc-f&I.jpg']} />,
        tecnologias: ['Wordpress']
    },
    {
        tipo: 'pagina-web',
        category: "Retarte App",
        title: "Landing Page / App mobile",
        src: "/imagenes-trabajos/retarte-pc.jpeg",
        descripcion: 'Desarrollo de App y UX/UI con tecnología "No code" y Landing Page para el emprendimiento digital Retarte App',
        content: <Content title="Prueba2" imgAlt="Prueba2" imgsUrl={['/imagenes-trabajos/retarte-pc.jpeg', '/imagenes-trabajos/retarte-todo-pc.jpg', 'imagenes-trabajos/app-retarte.jpg']} />,
        tecnologias: ['Glide Apps, Wix']

    },
    {
        tipo: 'pagina-web',
        category: "Caring Data",
        title: "Página Web Responsive",
        src: "/imagenes-trabajos/caring-data1.png",
        descripcion: "Rediseño completo UI/UX de la página web en desktop y mobile para la marca de productos SAAS Caring Data (EEUU)",
        content: <Content title="Prueba2" imgAlt="Prueba2" imgsUrl={['/imagenes-trabajos/caring-data1.png', '/imagenes-trabajos/antes-caring-data-hero.jpg', '/imagenes-trabajos/completo-caring-data.jpg', '/imagenes-trabajos/antes-pc-caring-data.jpg']} />,
        tecnologias: ['Wix']

    },
    {
        tipo: 'pagina-web',
        category: "Bolt Apps",
        title: "Página Web Responsive",
        src: "/imagenes-trabajos/home-boltapps.jpeg",
        descripcion: "Diseño UI/UX de la página web para escritorio y móviles para Bolt Apps",
        content: <Content title="Prueba2" imgAlt="bolt-apps" imgsUrl={['/imagenes-trabajos/boltapps1.jpg', '/imagenes-trabajos/boltapps-2.jpg', '/imagenes-trabajos/boltapps-3.jpg']} />,
        tecnologias: ['Wix']

    },
    {
        tipo: 'app-moviles',
        category: "App POS Emprendedores",
        title: "Native App",
        src: "/imagenes-trabajos/pantallazos-pos.jpg",
        descripcion: "Desarrollo Full Stack del producto mínimo viable (MVP) para la app nativa de celulares POS Emprendedores",
        content: <Content title="Prueba2" imgAlt="App celulares" videoUrl="/videos-trabajos/pos-app.mov" />,
        tecnologias: ['Flutter, Firebase']

    },


    {
        tipo: 'app-web',
        category: "Amazóniko Reciclaje Colectivo",
        title: "App Web Responsive",
        src: "/imagenes-trabajos/home-amazoniko.jpg",
        descripcion: 'Desarrollo de aplicativo web con tecnología "No code" en desktop y mobile para la automatización y gestión de los flujos de trabajo internos para la marca de reciclaje colectivo Amazóniko',
        content: <Content title="Prueba2" imgAlt="Prueba2" imgsUrl={['/imagenes-trabajos/home-amazoniko.jpg', '/imagenes-trabajos/mobile-amazoniko.jpg', '/imagenes-trabajos/diseño-amazoniko.jpg']} />,
        tecnologias: ['Glide Apps']

    },
    {
        tipo: 'app-web',
        category: "Herbívoro Cocina Vegana",
        title: "App mobile",
        src: "/imagenes-trabajos/herbivoro-1.jpg",
        descripcion: 'Desarrollo de MVP y UX/UI con tecnología "No code" para el sistema de pedidos online para la cadena de restaurantes veganos Herbívoro',
        content: <Content title="Prueba2" imgAlt="Prueba2" imgsUrl={['/imagenes-trabajos/herbivoro-1.jpg', '/imagenes-trabajos/herbivoro-2.jpg', 'imagenes-trabajos/herbivoro-3.jpg']} />,
        tecnologias: ['Glide Apps']

    },



];
