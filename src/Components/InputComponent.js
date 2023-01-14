import React, { createElement, useState } from "react";

const InputComponent = () => {
  // State hook function//
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);


  function addItem(e) {
    e.preventDefault();
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

  //Edit an Item//
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  function handleEditInputChange(e) {
    console.log(e, "console test e")
    e.preventDefault();
    setCurrentTodo({...currentTodo, value:e.target.value });
  }

  console.log(currentTodo.value, "test");

function handleEditClick(todo) {
  setIsEditing(true);
  setCurrentTodo({...todo});
}
function handleUpdateTodo(id,updatedTodo){
  console.log(id, updatedTodo, "updated todo");
  const updatedItem = items.map((item) => {
    return item.id === id ? updatedTodo : item;
  });

  setIsEditing(false);
  setItems(updatedItem);
}
function handleEditFormSubmit (e) {
  e.preventDefault();
  handleUpdateTodo(currentTodo.id, currentTodo);

}

  return (
    <div className="input-component">
        {isEditing ? (
          <form onSubmit={handleEditFormSubmit}>
            <h2>Edit ToDo</h2>
            <label htmlFor="editTodo">Edit To Do:</label>
           <input
              name="editTodo"
              type="text"
              placeholder="Edit todo"
              value={currentTodo.value}
              onChange={handleEditInputChange}
          />
           <button type="submit">Update</button>
           <button onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
        ) : (
          <form onSubmit={addItem}>
          <h2>Add To Do:</h2>
          <label htmlFor="todo">Enter a task: </label>
         
          <input
            name="todo"
            type="text"
            placeholder="Create a new todo"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => addItem()}>Add</button>
        </form>
      )}

      <div className="todo-items">
        {items.map((item) => (
          <div key={item.id}>
            {item.value}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => handleEditClick(item)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputComponent;
