export const Arrows = ({ slideRight, slideLeft }) => {
  return (
    <div className="arrows">
      <button className="left-arrow" onClick={slideLeft}>
        ◀
      </button>
      <button className="right-arrow" onClick={slideRight}>
        ▶
      </button>
    </div>
  );
};
