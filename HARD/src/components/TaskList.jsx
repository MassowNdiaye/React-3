import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TaskList.css";

const TaskList = ({ tasks, setTasks }) => {
  const [taskText, setTaskText] = useState(""); //Storing user input
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  const addTask = () => {

    //  adding empty tasks problem
    if (taskText.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    // Removing error message when task is not empty
    setError("");

    // Editing existing task
    if (editId !== null) {
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: taskText } : task,
        ),
      );
      setEditId(null);

      // Adding new task
    } else {
      setTasks([...tasks, { id: Date.now(), text: taskText }]);
    }

    // Reset input field
    setTaskText("");
  };

  // Saving edits
  const editTask = (task) => {
    setTaskText(task.text);
    setEditId(task.id);
  };

  // Filtering all task and removing the one with the matching id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="task-list">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={taskText} // Text input value
          placeholder="Enter yourt task..."
          onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>{editId ? "Update" : "Add"}</button>
      </div>

      <p className="error">{error}</p>

      <ul>
        {/* Listing all tasks  */}
        {tasks.map((task) => (
          <li className="links" key={task.id}>
            <Link to={`/task/${task.id}`}>{task.text}</Link>
            <div>
              <button className="edit-btn" onClick={() => editTask(task)}>
                Edit
              </button>
              <button
                className="delete-Btn"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
