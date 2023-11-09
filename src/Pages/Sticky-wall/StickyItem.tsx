import "./index.scss";

interface IStickyItemProps {
  color: string;
  onDelete: (id: number) => void;
  id: number;
}

const StickyItem: React.FC<IStickyItemProps> = ({
  color = "#ffb6c1",
  onDelete,
  id,
}) => {
  return (
    <div className="sticker-wall__sticker" style={{ backgroundColor: color }}>
      <h3 className="sticker-wall__caption">Caption</h3>
      <span className="sticker-wall__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio
        quod molestiae voluptatem velit qui eveniet quidem cupiditate, rem sunt
        repellendus beatae doloribus harum impedit autem. Laudantium provident
        deleniti harum!Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Corrupti optio quod molestiae voluptatem velit qui eveniet quidem
        cupiditate, rem sunt repellendus beatae doloribus harum impedit autem.
        Laudantium provident deleniti harum!Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Corrupti optio quod molestiae voluptatem
        velit qui eveniet quidem cupiditate, rem sunt repellendus beatae
        doloribus harum impedit autem. Laudantium provident deleniti harum!
      </span>
      <button className="sticker-wall__delete-btn" onClick={() => onDelete(id)}>
        &times;
      </button>
    </div>
  );
};

export default StickyItem;
