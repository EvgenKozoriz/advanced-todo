import { useParams } from "react-router-dom";
import "./index.scss";

const TagPage = () => {
  const { title } = useParams();
  return <div>{title}</div>;
};

export default TagPage;
