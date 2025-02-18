import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Starrating({ numberofstar=5 }) {
  const [rating, setrating] = useState(0);
  const [hover, sethovering] = useState(0);

  function handleClick(index) {
    setrating(index);
  }
  function handleMouseOver(index) {
    sethovering(index);
  }
  function handleMouseOut(index) {
    sethovering(0);
  }

  return (
    <div className="star-rating">
      {[...Array(numberofstar)].map((_, index) => {
        return(<FaStar
          key={index}
          onClick={()=>handleClick(index+1)}
          onMouseOver={()=>handleMouseOver(index+1)}
          onMouseOut={handleMouseOut}
          size={40}
          color={(hover||rating)>index ? "gold":"gray"}
        />)
      })}
    </div>
  );
}

export default Starrating;
