import React from 'react';

// Parent se 'updateOption' function prop ke roop mein mila
const ChildComponent1 = ({ updateOption }) => {
  return (
    <div>
      {/* Click hone par function call kiya aur value bhej di */}
      <button onClick={() => updateOption("Option 1 Selected")}>
        Select Option 1
      </button>
    </div>
  );
};

export default ChildComponent1;