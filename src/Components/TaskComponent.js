import React from "react";

const TaskComponent = () => {
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
    <div>
      {task.map((task) => (
        <div>
          {task.taskName}
          <button>{task.deleteButton}</button>
          <button>{task.editButton}</button>
        </div>
      ))}
    </div>
  );
};

export default TaskComponent;
