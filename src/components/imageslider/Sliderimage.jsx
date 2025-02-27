import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import axios from "axios";
import "./style.css";

function Sliderimages(props) {
  const [imagelink, setimagelink] = useState([]);
  const [curentslide, setcurentslide] = useState(0);
  const [error, seterror] = useState(0);
  const [loading, setloading] = useState(false);
  async function getLink(url, limit) {
    try {
      setloading(true);
      const response = await axios.get(`${url}limit=${limit}`);
      console.log("API Response:", response.data);
      setimagelink(response.data);
      return response.data;
    } catch (error) {
      console.log("API Error:", error.message);
      seterror(error.message);
      setloading(false);
    }
  }

  // Inside your component, add this:
  useEffect(() => {
    getLink(props.url, props.limit);
  }, [props.url, props.limit]);
  //checking how many elements
  //   useEffect(() => {
  //     console.log("Current imagelink state:", imagelink);
  // }, [imagelink]);

  function handleprevious() {
    setcurentslide(curentslide === 0 ? imagelink.length - 1 : curentslide - 1);
  }
  function handlenext() {
    setcurentslide(curentslide === imagelink.length - 1 ? 0 : curentslide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handleprevious}
        className="arrow arrow-left"
      />
      {imagelink && imagelink.length > 0
        ? imagelink.map((val, index) => (
            <img
              key={val.id}
              src={val.download_url}
              alt={val.download_url}
              className={
                curentslide === index ? "current-image" : "current-image-hide"
              }
            />
          ))
        : null}

      <BsArrowRightCircleFill
        onClick={handlenext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {imagelink && imagelink.length > 0
          ? imagelink.map((__, index) => (
              <button
                key={index}
                className={
                  curentslide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setcurentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default Sliderimages;
