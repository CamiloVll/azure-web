import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Cloud from "../img/Cloud.svg";
import Cloud1 from "../img/Cloud.svg";
import Cloud2 from "../img/Cloud.svg";
import font from "../img/back.png";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${font});
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }

  @media screen and (max-width: 768px) {
    h1 {
      margin-bottom: 0.5rem;
      font-size: 2rem;
      text-align: center;
    }
    p {
      margin: 2rem 0;
      font-size: 3rem;
      text-align: center;
      line-height: 1.1;
    }
  }
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 90px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  @media screen and (max-width: 768px) {
    ${Image}:nth-child(1) {
      top: -120px;
      left: 40px;
    }
    ${Image}:nth-child(2) {
      top: -130px;
      right: 70px;
    }
    ${Image}:nth-child(3) {
      top: -121px;
      left: -50px;
    }
  }
`;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Bienvenido a mi nube
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            En un viaje con la Informatica
          </motion.p>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={Cloud}
            alt="Cloud"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Cloud1}
            alt="Cloud"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={Cloud2}
            alt="Cloud"
            whileTap={{ scale: 0.6 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
