import React, { useState } from "react";

function Genrator() {
  const [state, setstate] = useState("");
  const [color, setcolor] = useState("");

  function fixhexstate() {
    setstate("0");
  }

  function fixRGBstate() {
    setstate("1");
  }

  function randomGenerator(length) {
    return Math.floor(Math.random() * length);
  }
  function hexgenerator(params) {
    const val = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += val[randomGenerator(val.length)];
    }
    console.log(hexcolor);
    setcolor(hexcolor);
  }

  function RGBgenerator() {
    const length = 255;
    const r = randomGenerator(length);
    const g = randomGenerator(length);
    const b = randomGenerator(length);

    setcolor(["rgb(", r, ",", g, ",", b, ")"].join(""));
  }

  return (
    <div
      className="space"
      style={{
        backgroundColor: color,
      }}
    >
      <div className="header">
        <button onClick={fixhexstate}>Create HEX color</button>
        <button onClick={fixRGBstate}>Create RGB color</button>
        <button
          onClick={state === "1" ? () => RGBgenerator() : () => hexgenerator()}
        >
          Create Random color
        </button>
        <div className="inside">
          {state === "1" ? (
            <div>
              <h2>RGB COLOR</h2>
              <p>{color}</p>
            </div>
          ) : (
            <div>
              <h2>HEX COLOR</h2>
              <p>{color}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Genrator;
