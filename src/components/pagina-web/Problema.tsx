import styled from 'styled-components';
export const Problema = () => {
    return (
        <Section id="problema">

            <ContenedorFlex >

                <Imagen
                    src="/images/WG03.png"
                    alt="product detail"
                />
                <ContendorWrapTexto>


                    <TituloTexto>
                        POR UNA WEB MÁS SOSTENIBLE
                    </TituloTexto>
                    <Texto>
                        <p>El internet que usamos a diario para entretenernos y facilitarnos la vida tiene un lado que poco
                            conocemos y que está generando un alto costo al planeta.🥵
                            <TextoResaltado > Si Internet fuera hoy un país, ¡estaría en el cuarto puesto entre los
                                más contaminantes! 😯 </TextoResaltado></p>

                        <p>En pocas palabras internet contamina el planeta al hacer uso de grandes cantidades de energía, necesaria para el
                            funcionaniento de los servidores y dispositivos de los usuarios. 💻📱 Desafortunadamente, actualmente la energía del mundo
                            provide en más de un 80% de fuentes "sucias" (petróleo, gas y carbón), los cuales emiten el CO2 contaminante.</p>

                        <p>Con el desarrollo web sostenible 🌿 se pretende <TextoResaltado >minimizar el uso de energía necesaria en los productos web </TextoResaltado>
                            sin afectar la experiencia del usuario. Estrategias como optimizar el código de programación
                            para lograr menos uso de computación, o, la compresión de imagenes y videos para achicar su tamaño
                            y disminuir la energía necesaria en su envío vía internet, o, mejorar la experiencia de usuario para evitar
                            que el usuario navege inutilmente por cada una de las páginas.
                        </p>


                    </Texto>
                </ContendorWrapTexto>
            </ ContenedorFlex>

        </Section>
    );
};


const Section = styled.section`
  display: flex;
  width: 165%;
  min-height: 80vh;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  background-color: #99de66; /* verde aguamarina */
  
  
  
  
`;




const ContenedorFlex = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
    
  
`;
const ContendorWrapTexto = styled.div`
  display: flex;
  flex-direction:column;
  gap: 30px;
  align-items: left;
  justify-content: center;
    
  
`;

const TextoResaltado = styled.span`
    font-weight: 600;

`;
const TituloTexto = styled.h2`
    font-weight: 900;
  font-size: 3.5rem;
    font-family: 'palaquin', sans-serif !important;
    width: 450px;
    line-height: 1;
    color: white;
`;

const Imagen = styled.img`
    position: relative;
    width: 300px;
    left: 100px;
    
  `;



const Texto = styled.div`
    
  display: flex;
  flex-direction: column;
  gap: 20px;
text-align: start;
  background-size: cover;
  background-position: center;
  padding-right: 80px;
  color: black;
  font-family: 'inter', sans-serif;
  line-height: 1.3;
  width: 70%;
 text-align: start;
 font-size: 1.2rem;
font-weight: 400;

  
`;

