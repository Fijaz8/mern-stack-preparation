import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";
import Genrator from "./components/random-colorgenerator/Genrator";
import Starrating from "./components/star-rating/Starrating";
import Sliderimages from "./components/imageslider/Sliderimage";
function App() {
  

  return (
    <div>
   <Accordion />
   <Genrator/>
   <Starrating numberofstar={5} />
    <Sliderimages url={"https://picsum.photos/v2/list?page=5&"} limit={5}/>
    

   </div>
  );
}

export default App;
