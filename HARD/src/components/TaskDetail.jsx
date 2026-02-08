import React from "react";
import { useParams, Link } from "react-router-dom";
import "./TaskDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";


const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id)); // Looking for the task with the matching id

  return (
    <div className="task-detail">
      <Link to="/"><FontAwesomeIcon className="icon" icon={faCircleChevronLeft} />Back to To-Do List</Link>
      <h2>Task Detail</h2>
      <p>
        <strong>Text:</strong> {task.text}
      </p>
    </div>
  );
};

export default TaskDetail;
