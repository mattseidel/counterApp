import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.css";
const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);
  const handleAdd = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setCounter(value);
  };
  const handleMinus = (e) => {
    e.preventDefault();
    setCounter(counter - 1);
  };
  CounterApp.protoType = { value: PropTypes.number };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={handleMinus}>-1</button>
    </>
  );
};

export default CounterApp;
