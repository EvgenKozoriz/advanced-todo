import "./index.scss";

const UpcomingCard = ({ title = "Today" }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <button>+ add new task</button>
      <ul className="card__tasks-list">
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
        <li>Task 4</li>
        <li>Task 1</li>
      </ul>
    </div>
  );
};

export default UpcomingCard;
