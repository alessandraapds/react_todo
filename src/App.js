// import "./index.css";
import "./App.css";

import Heading from "./Components/Heading";
import InputComponent from "./Components/InputComponent";
import TaskComponent from "./Components/TaskComponent";

function App() {
  const task = [
    {
      id: 1,
      taskName: "task name 1",
      deleteButton: "delete",
      editButton: "edit",
    },
    {
      id: 2,
      taskName: "task name 2",
      deleteButton: "delete",
      editButton: "edit",
    },
    {
      id: 3,
      taskName: "task name 3",
      deleteButton: "delete",
      editButton: "edit",
    },
  ];

  return (
    <div className="App">
      <Heading />
      <InputComponent />
      <TaskComponent />
    </div>
  );
}

export default App;
