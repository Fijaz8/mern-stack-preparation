import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Genrator from "./components/random-colorgenerator/Genrator";
function App() {
  

  return (
    <div>
   <Accordion />
   <Genrator/>

   </div>
  );
}

export default App;
