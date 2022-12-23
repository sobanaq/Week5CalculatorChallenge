import "./App.css";
import React from "react";
import { evaluate } from "mathjs";
import { useState } from "react";

const App = () => {
  // calculator state is defined
  const [input, setInput] = useState("");
  // this function gives the calculator its evaulation
  const calculate = (aButton) => {
    if (aButton === "=") {
      const result = evaluate(input);
      setInput(result);
    } else if (aButton === "ac") {
      setInput("");
    } else setInput(input + aButton);
  };
  // handle click
  const handleClick = (e) => {
    const display = e.target.textContent;
    calculate(display);
  };

  return (
    <div className="App">
      {/* This is the title */}
      <div className="title">Calculator App</div>
      {/* This is the main body of the calculator */}
      <div className="calculatorBody">
        <h1 className="display">{input}</h1>
        <div className="calc-buttons">
          <div className="numbers">
            <Buttons handleClick={handleClick} />
          </div>
          <Maths handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

//-------------------------------------------------------------

// This is the number component which gives the 'buttons' its functionality.

const Buttons = ({ handleClick }) => {
  const numButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "ac", "="];
  return (
    <div>
      {numButtons.map((aButton) => (
        <button className="numberButtons" onClick={handleClick} key={aButton}>
          {aButton}
        </button>
      ))}
    </div>
  );
};

// This is the math buttons component which gives the 'buttons' its functionality.

const Maths = ({ handleClick }) => {
  const mathsButtons = ["+", "-", "*", "/"];
  return (
    <div>
      {mathsButtons.map((aButton) => (
        <button className="mathsButtons" onClick={handleClick} key={aButton}>
          {aButton}
        </button>
      ))}
    </div>
  );
};

export default App;
