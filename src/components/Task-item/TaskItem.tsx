import "./index.scss";

const TaskItem = () => {
  return <div className="task-item">
    <input className="task-item__checkbox" type="checkbox" />
    <span className="task-item__task-text">Complete app</span>
    <button className="task-item__button">&gt;</button>
  </div>;
};

export default TaskItem;
