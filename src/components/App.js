import React, { useState } from "react";
import "../styles/App.css";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");
  
  const handleOptionUpdate = (newOptionValue) => {
    setSelectedOption(newOptionValue);
  };

  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <p>Selected Option: {selectedOption}</p>

        <ChildComponent1 updateOption={handleOptionUpdate} />
        <ChildComponent2 updateOption={handleOptionUpdate} />
    </div>
  )
}

export default App
