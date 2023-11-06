import { Link } from "react-router-dom";
import "./index.scss";

const TaskChoice = () => {
  return (
    <div className="tasks">
      <h2 className="tasks__title">TASKS</h2>
      <div className="tasks__wrapper">
        <Link to={"/upcoming"}>
          <div className="tasks__button">
            <div className="tasks__btn-block">
              <img src="src\assets\upcoming-icon.png" alt="upcoming-icon" />
              <h2 className="tasks__btn-title">Upcoming</h2>
            </div>
            <div className="tasks__count">12</div>
          </div>
        </Link>
        <Link to={"/today"}>
          <div className="tasks__button">
            <div className="tasks__btn-block">
              <img src="src\assets\today-icon.png" alt="today-icon" />
              <h2 className="tasks__btn-title">Today</h2>
            </div>
            <div className="tasks__count">5</div>
          </div>
        </Link>
        <Link to={"/calendar"}>
          <div className="tasks__button">
            <div className="tasks__btn-block">
              <img src="src\assets\calendar-icon.png" alt="calendar-icon" />
              <h2 className="tasks__btn-title">Calendar</h2>
            </div>
          </div>
        </Link>
        <Link to={"/sticky-wall"}>
          <div className="tasks__button">
            <div className="tasks__btn-block">
              <img
                src="src\assets\stickerWall-icon.png"
                alt="stickyWall-icon"
              />
              <h2 className="tasks__btn-title">Sticky wall</h2>
            </div>
            <div className="tasks__count">3</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TaskChoice;
