// import logo from "./logo.svg";
// import "./App.css";

import React, { useState} from 'react';
import Heading from "./Components/Heading";
import InputComponent from "./Components/InputComponent";


function App() {
  // const task = [
  //   {
  //     id: 1,
  //     taskName: "task name 1",
  //     deleteButton: "delete",
  //     editButton: "edit",
  //   },
  //   {
  //     id: 2,
  //     taskName: "task name 2",
  //     deleteButton: "delete",
  //     editButton: "edit",
  //   },
  //   {
  //     id: 3,
  //     taskName: "task name 3",
  //     deleteButton: "delete",
  //     editButton: "edit",
  //   },
  // ];

  const [task, addTask] = useState ("");

  return (
    <div className="App">
      <Heading />
      <div>
      <div class="task-input">
        <i className="uil-align-left"></i>
        <input
          className="input-task-input"
          id="input-task-input"
          type="text"
          placeholder="Add new task" 
          
        ></input>
        <button onClick={() => addTask(  
        <div>
    <span>input</span>
    <button>delete</button>
     <button>edit</button>
   </div>)}> Add ToDo </button>
      </div>
    </div>
    <p>{task}</p>
    </div>
  );
}

export default App;
