export const Background = (props) => {
  const { src, children } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <div className="background">
      {children}
      <img src={src} alt="" />
    </div>
  );
};
