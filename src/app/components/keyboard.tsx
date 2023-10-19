"use client";
import React from "react";

interface KeyboardProps {
  onButtonClick: (button: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ onButtonClick }) => {
  const buttons = [
    "C",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  return (
    <div className="grid grid-cols-4 bg-black border border-black gap-2">
      {buttons.map((button, index) => {
        const isOperator = ["/", "*", "-", "+"].includes(button);
        const isNumber = !isNaN(Number(button)) || button === ".";
        return (
          <button
            key={index}
            className={`p-10 border-black ${
              (button === "=" && "col-span-1 bg-orange-400") ||
              (button === "0" && "col-span-2 bg-gray-500") ||
              (button === "C" && "col-span-3 bg-gray-400") ||
              (isNumber && "bg-gray-500") ||
              (isOperator && "bg-orange-400") ||
              "bg--400"
            } text-white rounded hover:bg-orange-900`}
            style={{
              borderRadius: "0",
            }}
            onClick={() => onButtonClick(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
