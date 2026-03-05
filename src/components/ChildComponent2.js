import React from 'react';

// Parent se wahi same function isko bhi mila
const ChildComponent2 = ({ updateOption }) => {
  return (
    <div>
      {/* Isne click hone par apni alag value bheji */}
      <button onClick={() => updateOption("Option 2 Selected")}>
        Select Option 2
      </button>
    </div>
  );
};

export default ChildComponent2;