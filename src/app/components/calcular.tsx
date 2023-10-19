"use client";
import React, { useState } from "react";
import Display from "../components/display";
import Keyboard from "../components/keyboard";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const handleButtonClick = (button: string) => {
    if (button === "=") {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (button === "C") {
      setInput("");
    } else {
      setInput(input + button);
    }
  };

  return (
    <div>
      <Display value={input} />
      <Keyboard onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
