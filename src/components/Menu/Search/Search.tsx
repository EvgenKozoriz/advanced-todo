import './index.scss'

const Search = () => {
  return (
    <div className="search">
      <div className="search__icon">
        <img src="src\assets\search-icon.png" alt="search-icon" />
      </div>
      <input className="search__input" type="text" placeholder="Search" />
    </div>
  );
};

export default Search;
