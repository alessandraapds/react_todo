import React from "react";
import AddButton from "./AddButton";

const InputComponent = () => {
  return (
    <div>
      <div class="task-input">
        <i className="uil-align-left"></i>
        <input
          className="input-task-input"
          id="input-task-input"
          type="text"
          placeholder="Add new task"
          value=""
        ></input>
        <button onClick={AddButton}>Add ToDo </button>
      </div>
    </div>
  );
};

export default InputComponent;
