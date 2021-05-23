import { useEffect } from "react";
export const Background = (props) => {
  const { src, setTrue, setFalse, children } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFalse(), []);
  return (
    <div className="background">
      {children}
      <img src={src} alt="" onLoad={setTrue} />
    </div>
  );
};
