import { Link } from "react-router-dom";

interface Iprops {
  title: string;
  color: string;
}

const Tag: React.FC<Iprops> = ({ title, color }) => {
  return (
    <Link to={`/tags/${title}`}>
      <div className="tags__element" style={{ backgroundColor: color }}>
        {title}
      </div>
    </Link>
  );
};

export default Tag;
