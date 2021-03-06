import React from "react";
import styled from "styled-components";
import azure from "../img/cloudcomputing.jpg";
import Animation from "../Animation/Animation";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #fff;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  margin-top: 200px;
  margin-bottom:100px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? "2" : "1")};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 90%;
      height: 90%;
    }
  }
`;
const ColumnLeft = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;

  h4 {
    text-align: left;
    padding: 0rem 2rem;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  h5 {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 16px;
    padding: 0rem 2rem;
  }
  p {
    text-align: left;
    padding: 0rem 2rem;
    margin-bottom: 2rem;
    font-weight: 400;
  }
  span {
    font-weight: 600;
  }
`;

function Informatic() {
  return (
    <Section>
      <Container>
        <ColumnRight>
          <img src={azure} alt="azure" />
        </ColumnRight>
        <ColumnLeft>
          <Animation>
            <h4>La nube en Informatica</h4>
            <p>
              La nube es algo que en estos momentos estamos ocupando, ya sea si
              estamos navegando por internet, creando nuestra copia de seguridad
              del whatsapp o incluso al momento de tomarnos una foto. Es algo
              que le ponemos muy poca atenci??n sin embargo en el transcurso de
              mi carrera en inform??tica puedo comentar que los usos que le dimos
              a la nube son los siguientes:
            </p>
            <h5> ??????Creaci??n de aplicaciones </h5>
            <p>
              Aplicaciones web, m??viles o cualquier API, en la mayor??a de
              ocasiones la escuela nos brinda la capacidad de hacer este tipo de
              proyectos, pero sin generar un impacto, pienso que esto debe ser
              algo que no solo demuestra lo que hiciste y te sirva para en un
              futuro encontrar un empleo, si no que a m??s gente pueda hacer uso
              de tu informaci??n o encontrar la inspiraci??n en tu proyecto.{" "}
              <span>Es aqu?? donde entra la nube.</span>
            </p>
            <h5> ??????An??lisis de datos </h5>
            <p>
              Tal como el ejemplo que nos dieron en este viaje el an??lisis de
              datos es fundamental para obtener informaci??n detallada para la
              toma de decisiones.
            </p>
            <h5> ??????Almacenamiento de datos </h5>
            <p>
              La mejor protecci??n que podemos tener hablando de nuestros datos
              es la nube, en inform??tica y en general para cualquier persona que
              se adentre al mundo del software un claro ejemplo de esto es
              github, que nos permite tener un control de versiones, subirlas y
              hacer uso de cualquier rama del proyecto en cualquier lugar y a
              cualquier hora.
            </p>
          </Animation>
        </ColumnLeft>
      </Container>
    </Section>
  );
}

export default Informatic;
