import React, { useState } from "react";

const InputComponent = () => {
  // State hook function//
  const [newItem, setNewItem] = useState([]);

  function addItem() {
    console.log(newItem);
  }

  return (
    <div>
      <div className="task-input">
        <i className="uil-align-left"></i>
        <input
          className="text"
          id=""
          type=""
          placeholder="Add new task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button onClick={() => addItem()}>Add</button>
        
      </div>
    </div>
  );
};

export default InputComponent;
