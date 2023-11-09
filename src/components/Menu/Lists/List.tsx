import { Link } from "react-router-dom";

interface Iprops {
  title: string;
  color: string;
  count: number;
}

const List: React.FC<Iprops> = ({ title, color, count }) => {
  return (
    <Link to={`/list/${title}`}>
      <div className="lists__element">
        <div className="lists__el-block">
          <div
            className="lists__color"
            style={{ backgroundColor: color }}
          ></div>
          <h2 className="lists__name">{title}</h2>
        </div>
        <div className="lists__count">{count}</div>
      </div>
    </Link>
  );
};

export default List;
