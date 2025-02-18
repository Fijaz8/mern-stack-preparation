import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Genrator from "./components/random-colorgenerator/Genrator";
import Starrating from "./components/star-rating/Starrating";
function App() {
  

  return (
    <div>
   <Accordion />
   <Genrator/>
   <Starrating numberofstar={5} />
      

   </div>
  );
}

export default App;
