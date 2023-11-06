import "./index.scss";
import iconPath from "../../../assets/search-icon.png";

const Search = () => {
  return (
    <div className="search">
      <div className="search__icon">
        <img src={iconPath} alt="search-icon" />
      </div>
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
