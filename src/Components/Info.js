import React from "react";
import styled from "styled-components";
import azure from "../img/infocloud.jpg";
import Animation from "../Animation/Animation";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #fdfdfd;
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnRight = styled.div`
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
  p {
    text-align: left;
    padding: 0rem 2rem;
    margin-bottom: 2rem;
    font-weight: 400;
  }
`;
const ColumnLeft = styled.div`
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

function Info() {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <img src={azure} alt="azure" />
        </ColumnLeft>
        <ColumnRight>
          <Animation>
            <h4>¿Qué es la nube?</h4>
            <p>
              La nube es una red de recursos a través de internet que nos
              proveen de servicios informáticos, como pueden ser los servidores,
              bases de datos, almacenamiento, software e inteligencia
              artificial. Esta ha sido una de las ideas que ha cambiado la
              industria debido a que ahora es más sencillo ocupar este tipo de
              servicios con una infraestructura ya hecha y a un precio accesible
              con la cual podamos incluso realizar cualquier proyecto que se
              adapte a nuestras necesidades, como puede ser una página web, o
              almacenamiento para nuestros datos etc.
            </p>
          </Animation>
        </ColumnRight>
      </Container>
    </Section>
  );
}

export default Info;
