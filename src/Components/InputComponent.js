import React, { createElement, useState } from "react";

const InputComponent = () => {
  // State hook function//
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id != id);
    setItems(newArray);
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
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.value}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputComponent;
