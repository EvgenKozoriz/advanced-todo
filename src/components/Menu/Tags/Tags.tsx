import "./Index.scss";
import Tag from "./Tag";

const Tags = () => {
  return (
    <div className="tags">
      <h2 className="tags__title">TAGS</h2>
      <div className="tags__tags-block">
        <Tag />
        <Tag />
        <div className="tags__add-btn">+ Add Tag</div>
      </div>
    </div>
  );
};

export default Tags;
