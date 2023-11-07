import { useState } from "react";
import "./index.scss";
import StickyItem from "./StickyItem";

interface ISticker {
  color: string;
  id: number;
}

const colors = [
  "#ffb6c1",
  "#fdf2b3",
  "#ff7f50",
  "#20b2aa",
  "#9370db",
  "#90ee90",
  "#d1eaed",
  "#f08080",
  "#dda0dd",
  "#f4a460",
];
const StickyWall: React.FC = () => {
  const [stickers, setStickers] = useState<ISticker[]>([]);

  const addSticker = () => {
    const colorIndex = stickers.length % colors.length;
    setStickers([...stickers, { color: colors[colorIndex], id: Date.now() }]);
  };

  const deleteSticker = (id: number) => {
    const newStickers = stickers.filter((sticker) => sticker.id !== id);
    setStickers(newStickers);
  };
  return (
    <div className="sticker-wall">
      <h2 className="sticker-wall__title">Sticky Wall</h2>
      <div className="sticker-wall__container">
        {stickers.map((sticker) => (
          <StickyItem
            key={sticker.id}
            color={sticker.color}
            id={sticker.id}
            onDelete={deleteSticker}
          />
        ))}
        <button className="sticker-wall__button" onClick={addSticker}>
          +
        </button>
      </div>
    </div>
  );
};

export default StickyWall;
