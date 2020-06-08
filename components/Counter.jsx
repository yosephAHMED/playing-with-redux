// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onIncrementByValue, onIncrementByFive, onDecrement, onClear }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onClear}> Clear </button>
    <button onClick={onIncrementByFive}> + 5 </button>
    <button onClick={onIncrementByValue}> Enter </button>
  </div>
);

export default Counter;
