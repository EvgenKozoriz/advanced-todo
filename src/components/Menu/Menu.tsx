import { useState } from "react";
import "./index.scss";
import Search from "./Search/Search";
import TaskChoice from "./Tasks-choice/TaskChoice";
import Lists from "./Lists/Lists";
import Tags from "./Tags/Tags";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {isOpen ? (
        <div className="menu">
          <div className="menu__header-block">
            <h1 className="menu__title">Menu</h1>
            <button className="menu__hide-button" onClick={toggleIsOpen} >&#8801;</button>
          </div>
          <Search />
          <TaskChoice />
          <Lists />
          <Tags />
        </div>
      ) : (
        <button className={`menu__hide-button${isOpen ? '' : '_hide'}`} onClick={toggleIsOpen} >&#8801;</button>
      )}
    </>
  );
};

export default Menu;
