import React, { useState } from "react";

const InputComponent = () => {
  // State hook function
  const [newItem, setNewItem] = useState("");
  // Array that holds all new items
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter new Item");
      return;
    }

    // Create a new object
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(items);
  }

  return (
    <div>
      <div className="task-input">
        <i className="uil-align-left"></i>
        <input
          type="ext"
          placeholder="Add new task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button onClick={() => addItem()}>Add</button>
        <>
          <ul>
            {items.map((item) => {
              return <li key={item.id}>{item.value}</li>;
            })}
          </ul>
        </>
      </div>
    </div>
  );
};

export default InputComponent;
