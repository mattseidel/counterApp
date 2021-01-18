// import React, { Fragment } from "react";
import React from "react";
import "./index.css";
import PropType from "prop-types";
/**
 * primera app que se realiza
 * @param {Saludo} String un mensaje de saludo
 */
const PrimeraApp = ({ saludo, subtitulo }) => {
  return (
    <>
      <h1>{saludo} </h1>
      <p>{subtitulo}</p>
    </>
  );
  PrimeraApp.protoType = {
    saludo: PropType.string.isRequired,
  };
  PrimeraApp.defaultProps = {
    subtitulo: ""
  }
};

export default PrimeraApp;
