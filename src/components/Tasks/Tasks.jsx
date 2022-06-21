import React from 'react';
import './Tasks.css';

const TasksWidget = () => {
  return (
    <div className="tasklist">
      <div className="task">
        <h3 className="task__title">Make app layout</h3>
        <p className="task__description">Use some technologies</p>
      </div>
      <button className="btn btn_light">New task</button>
    </div>
  );
};

export default TasksWidget;
