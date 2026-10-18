import { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = () => {
    const lastId = taskList[taskList.length - 1]?.id || 0;
    setTaskList((prev) => [
      ...prev,
      { id: lastId + 1, taskName: task, isCompleted: false },
    ]);
    setTask("");
  };
  const handleDeleteTask = (taskId) => {
    setTaskList((prev) => prev.filter((item) => item.id !== taskId));
  };
  const handleCompleteTask = (taskId) => {
    setTaskList((prev) =>
      prev.map((item) =>
        item.id === taskId ? { ...item, isCompleted: true } : task,
      ),
    );
  };
  return (
    <div>
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="New Task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={handleAddTask} disabled={!task}>
        Add Task
      </button>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>{task.taskName}</p>
            <p>Task Completed: {task.isCompleted ? "Yes" : "No"}</p>
            <button
              onClick={() => handleCompleteTask(task.id)}
              disabled={task.isCompleted}
            >
              completed
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
