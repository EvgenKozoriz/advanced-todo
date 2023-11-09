import { useState } from "react";
import "./Index.scss";
import Tag from "./Tag";

interface TagsType {
  id: number;
  color: string;
  title: string;
}

const staticData = [
  { id: 1, title: "tag1", color: "#d1eaed" },
  { id: 2, title: "tag2", color: "#e6f7ff" },
];

const colors: string[] = [
  "#c2e3f0",
  "#ffcccb",
  "#b5d8e9",
  "#ffd0ad",
  "#d9c8e8",
  "#ffdfb3",
  "#c4ffc4",
  "#b0ccff",
];

const Tags = () => {
  const [tags, setTags] = useState<TagsType[]>(staticData);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>("#cce6ff");
  const [titleText, setTitleText] = useState<string>("");

  const handleTitleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleText(e.currentTarget.value);
  };

  const handleAddTag = () => {
    const newId: number = Number(Date.now());
    const newTag: TagsType = {
      id: newId,
      color: currentColor,
      title: titleText,
    };
    setTags((prev) => [...prev, newTag]);
    setTitleText("");
  };

  return (
    <div className="tags">
      <h2 className="tags__title">TAGS</h2>
      <div className="tags__tags-block">
        {tags.map((tag) => (
          <Tag key={tag.id} title={tag.title} color={tag.color} />
        ))}
        <div className="tags__add-btn" onClick={() => setIsShow(!isShow)}>
          + Add Tag
        </div>
      </div>
      {isShow && (
        <div className="tags__add-block">
          <div className="tags__color-input-wrapper">
            <div
              className="tags__current-color"
              style={{ backgroundColor: currentColor }}
            ></div>
            <input
              className="tags__add-input"
              type="text"
              placeholder="Add Tag"
              value={titleText}
              onChange={handleTitleTextChange}
            />
          </div>
          <div className="tags__add-color-block">
            {colors.map((color, ind) => (
              <div
                key={ind}
                className="tags__colors"
                style={{ backgroundColor: color }}
                onClick={() => setCurrentColor(color)}
              ></div>
            ))}
          </div>
          <button
            className="tags__submit-btn"
            onClick={handleAddTag}
            disabled={!titleText}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Tags;
