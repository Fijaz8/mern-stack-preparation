import React, { useState, useEffect } from "react";

import data from "./data.js";

function Accordion() {
  const [singleselected, setselector] = useState("");
  const [multiselector, setmultiselector] = useState(false);
  const [multiselectorid, setmultiselectorid] = useState([]);

  function clicked(id) {
    setselector((prev) => (prev === id ? "" : id)); // Toggle selection
  }
  function multiclick(id) {
    setmultiselectorid((prev) => {
    let val=[...prev]

    const index=val.indexOf(id);
   
    if (index===-1){val.push(id)}else{
        val.splice(index,1)
        }
   
    return val;
    })
}
  

  return (
    <div className="wrapper">
      <button onClick={() => setmultiselector(!multiselector)}>
        multiselector
      </button>
      <div className="comp">
        {data.map((dataitems) => (
          <div className="items" key={dataitems.id}>
            <div
              className="title"
              onClick={
                multiselector? () =>multiclick(dataitems.id) :() => clicked(dataitems.id)
              }
            >
              <h3>{dataitems.question}</h3>
              <span>+</span>
            </div>
            {(singleselected === dataitems.id || multiselectorid.includes(dataitems.id)) && (
              <p>{dataitems.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Accordion;
