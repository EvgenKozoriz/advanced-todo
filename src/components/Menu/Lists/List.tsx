const List = () => {
  return (
    <div className="lists__element">
      <div className="lists__el-block">
        <div
          className="lists__color"
          style={{ backgroundColor: "yellow" }}
        ></div>
        <h2 className="lists__name">Personal</h2>
      </div>
      <div className="lists__count">10</div>
    </div>
  );
};

export default List;
