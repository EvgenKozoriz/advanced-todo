import AddButton from "../../components/Add-button/AddButton";
import TaskItem from "../../components/Task-item/TaskItem";
import "./index.scss";

const TodayTasks = () => {
  return (
    <div className="today">
      <div className="today__header">
        <h2>Today</h2>
        <div className="today__count">5</div>
      </div>
      <AddButton />
      <div className="today__tasks">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    </div>
  );
};

export default TodayTasks;
