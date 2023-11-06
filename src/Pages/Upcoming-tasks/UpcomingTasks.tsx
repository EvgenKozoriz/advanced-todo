import "./index.scss";
import UpcomingCard from "../../components/Upcoming-plate/UpcomingPlate";

const UpcomingTasks = () => {
  return (
    <div className="upcoming">
      <div className="upcoming__header">
        <h2>Upcoming Tasks</h2>
        <div className="upcoming__count">12</div>
      </div>
      <div className="upcoming__card-grid">
        <UpcomingCard title="Today" />
        <UpcomingCard title="Tomorrow" />
        <UpcomingCard title="This Week" />
        <UpcomingCard title="This Month" />
      </div>
    </div>
  );
};

export default UpcomingTasks;
