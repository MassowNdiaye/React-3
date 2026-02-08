import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<TaskList tasks={tasks} setTasks={setTasks} />}
      />
      <Route
        path="/task/:id"
        element={<TaskDetail tasks={tasks} />}
      />
    </Routes>
  );
};

export default App;
