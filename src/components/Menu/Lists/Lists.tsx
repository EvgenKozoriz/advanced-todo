import "./index.scss";
import List from "./List";
import iconPath from "../../../assets/plus-icon.png";
const Lists = () => {
  return (
    <div className="lists">
      <h2 className="lists__title">LISTS</h2>
      <div className="lists__wrapper">
        <List />
        <List />
      </div>
      <div className="lists__add-btn">
        <div className="lists__el-block">
          <img src={iconPath} className="lists__add-btn-plus" alt="plus-icon" />
          <h2 className="lists__add-btn-name">Add new List</h2>
        </div>
      </div>
    </div>
  );
};

export default Lists;
