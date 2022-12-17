import React from "react";

function AddButton() {
  alert("test alert");

  return (
    <div>
      <button onClick={AddButton}> Add </button>
    </div>
  );
}
export default AddButton;
