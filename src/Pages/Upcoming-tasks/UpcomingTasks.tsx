import "./index.scss";
import UpcomingCard from "../../components/Upcoming-card/UpcomingCard";

const UpcomingTasks = () => {
  const titles = ["Today", "Tomorrow", "This Week", "This Month"];

  return (
    <div className="upcoming">
      <div className="upcoming__header">
        <h2>Upcoming Tasks</h2>
        <div className="upcoming__count">12</div>
      </div>
      <div className="upcoming__card-grid">
        {titles.map((title) => (
          <UpcomingCard title={title} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingTasks;
