import { useParams } from "react-router-dom";
import "./index.scss";
import AddButton from "../../components/Add-button/AddButton";
import TaskItem from "../../components/Task-item/TaskItem";

const ListPage = () => {
  const { title } = useParams();

  return (
    <div className="list-page">
      <div className="list-page__header">
        <div className="list-page__color"></div>
        <h2 className="list-page__title">{title}</h2>
        <div className="list-page__count">5</div>
      </div>
      <AddButton />
      <div className="list-page__tasks">
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

export default ListPage;
