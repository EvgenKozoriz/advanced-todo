import AddButton from "../Add-button/AddButton";
import TaskItem from "../Task-item/TaskItem";
import "./index.scss";

const UpcomingCard = ({ title = "Today" }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <AddButton />
      <div className="card__tasks-list">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
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

export default UpcomingCard;
