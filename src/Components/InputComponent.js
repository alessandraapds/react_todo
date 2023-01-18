import React, { useState } from "react";

const InputComponent = () => {
  // State hook function
  const [newItem, setNewItem] = useState("");
  // Array that holds all new items
  const [items, setItems] = useState([]);

  // const[isEditing, setIsEditing] =useState(false)
  // const[currentTodo, setCurrentTodo] =useState({})

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
  }

  function deleteItem(id) {
     const newArray = items.filter((item) => item.id !== id);
     setItems(newArray);
  }

  return (
    <div>
      <div className="task-input">
        <i ></i>
        <input
          type="ext"
          placeholder="Add new task"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        
        <button onClick={() => addItem()}>Add</button>
        <>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onclick={() => deleteItem(item.id)}> ❌</button>
                </li>
              );
            })}
          </ul>
        </>
      </div>
    </div>
  );
};

export default InputComponent;
