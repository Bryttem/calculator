"use client";
import React from "react";

interface DisplayProps {
  value: string;
}

const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <input
      type="text"
      className="border border-black 
            text-3xl text-right bg-gray-300"
      placeholder="0"
      readOnly
      value={value}
    />
  );
};

export default Display;
