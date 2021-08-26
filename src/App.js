import './App.css';
import React from "react";
import Hero from "./Components/Hero";
import Footer from './Components/Footer';
import Info from './Components/Info';
import Informatic from './Components/Informatic';
import Vent from './Components/vent';

function App() {
  return (
    <>
      <Hero />
      <Info />
      <Informatic />
      <Vent/>
      <Footer />
    </>
  );
}

export default App;
