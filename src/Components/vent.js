import React from "react";
import styled from "styled-components";
import Animation from "../Animation/Animation";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background-color: #fdfdfd;
  h4 {
    text-align: center;
    padding: 0rem 2rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
    margin-bottom: -80px;
    @media screen and (max-width: 768px) {
      margin-bottom: 0px;
    }
  }
`;
const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 500px;
  margin-left: 190px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 40px;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;

  h5 {
    margin-bottom: 1rem;
    font-size: 16px;
    text-align: left;
  }
  p {
    text-align: left;
    margin-bottom: 2rem;
    font-weight: 400;
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
  h5 {
    margin-bottom: 1rem;
    font-size: 16px;

    text-align: left;
  }
  p {
    text-align: left;
    margin-bottom: 2rem;
    font-weight: 400;
  }
`;

function vent() {
  return (
    <Section>
      <h4>Ventajas de la nube</h4>
      <Container>
        <ColumnRight>
          <Animation>
            <h5>💣Costo</h5>
            <p>
              Invertir capital en la infraestructura es bueno, sin embargo
              servicios como azure nos proveen el hardware y software a un costo
              menor y obteniendo mejores resultados, dependiendo de nuestras
              necesidades, además que en algún futuro tener la capacidad de
              escalar los recursos.
            </p>
            <h5>💣Rendimiento</h5>
            <p>
              El rendimiento que se tiene en la nube es el mejor debido a las
              muchas empresas hacen uso de él. Cuenta con el mejor hardware en
              en sueños había podido imagina tener(
            </p>
          </Animation>
        </ColumnRight>

        <ColumnLeft>
          <Animation>
            <h5>💣Seguridad </h5>
            <p>
              Sabemos que la información es lo más valioso que puede tener una
              empresa, llegando a tener un costo bastante alto en el mercado, es
              por eso que los servicios en la nube tienen que resguardar esta
              información, por lo cual establecen métodos y tecnologías para
              brindar la mejor protección a los datos de cualquier amenaza
            </p>

            <h5>💣Productividad </h5>
            <p>
              Con lo fácil que es hoy en día el proceso las actualizaciones de
              forma constante en el teléfono, también como hacer uso de la nube
              para acabar con trabajos redundantes o incluso dejar una tarea
              programada, son cosas que nos permite hacer la nube y que sin duda
              es de gran ayuda para poder dedicarnos a tareas más específicas y
              dejar este tipo de actividades automatizadas.
            </p>
          </Animation>
        </ColumnLeft>
      </Container>
    </Section>
  );
}

export default vent;
