import "./index.scss";
import List from "./List";
import iconPath from "../../../assets/plus-icon.png";
import { useState } from "react";

interface ListType {
  id: number;
  color: string;
  title: string;
  count: number;
}

const staticData: ListType[] = [
  { id: 1, color: "#ff6b6b", title: "Personal", count: 5 },
  { id: 2, color: "#da77f2", title: "work", count: 6 },
  { id: 3, color: "#9775fa", title: "List1", count: 3 },
];

const colors: string[] = [
  "#ff6b6b",
  "#da77f2",
  "#9775fa",
  "#5c7cfa",
  "#66d9e8",
  "#8ce99a",
  "#fcdd6f",
  "#ff922b",
];

const Lists = () => {
  const [lists, setLists] = useState<ListType[]>(staticData);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentColor, setCurrentColor] = useState<string>("#ff6b6b");
  const [titleText, setTitleText] = useState<string>("");

  const handleTitleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTitleText(e.currentTarget.value);
  };

  const handleAddList = () => {
    const newId: number = Number(Date.now());
    const newList: ListType = {
      id: newId,
      color: currentColor,
      title: titleText,
      count: 5,
    };
    setLists((prev) => [...prev, newList]);
    setTitleText("");
  };

  return (
    <div className="lists">
      <h2 className="lists__title">LISTS</h2>
      <div className="lists__wrapper">
        {lists.map((list) => (
          <List
            key={list.id}
            color={list.color}
            title={list.title}
            count={list.count}
          />
        ))}
      </div>
      <div className="lists__add-btn" onClick={() => setIsShow(!isShow)}>
        <div className="lists__el-block">
          <img src={iconPath} className="lists__add-btn-plus" alt="plus-icon" />
          <h2 className="lists__add-btn-name">Add new List</h2>
        </div>
      </div>
      {isShow && (
        <div className="lists__add-block">
          <div className="lists__color-input-wrapper">
            <div
              className="lists__current-color"
              style={{ backgroundColor: currentColor }}
            ></div>
            <input
              className="lists__add-input"
              type="text"
              placeholder="Add title"
              value={titleText}
              onChange={handleTitleTextChange}
            />
          </div>
          <div className="lists__add-color-block">
            {colors.map((color, ind) => (
              <div
                key={ind}
                className="lists__colors"
                style={{ backgroundColor: color }}
                onClick={() => setCurrentColor(color)}
              ></div>
            ))}
          </div>
          <button
            className="lists__submit-btn"
            onClick={handleAddList}
            disabled={!titleText}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default Lists;
