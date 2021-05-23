import { useState } from "react";
import { Arrows } from "./components/Arrows";
import { Background } from "./components/Background";
import { BgAudio } from "./components/BgAudio";
import { TextOverlay } from "./components/TextOverlay";
import "./components/Arrows.css";
import "./components/Background.css";
import "./components/BgAudio.css";
import "./components/TextOverlay.css";
import track1 from "./audio-asset/audio-1.wav";
import track2 from "./audio-asset/audio-2.wav";
import track3 from "./audio-asset/audio-3.wav";
import track4 from "./audio-asset/audio-4.wav";
import track5 from "./audio-asset/audio-5.wav";
import "./App.css";

const sourceArray = [
  {
    bg: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFya3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    text: "Mountain",
    audio: track1,
  },
  {
    bg: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGFya3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    text: "River",
    audio: track2,
  },
  {
    bg: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRhcmt8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    text: "Cloud",
    audio: track3,
  },
  {
    bg: "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRhcmt8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    text: "Tree",
    audio: track4,
  },
  {
    bg: "https://images.unsplash.com/photo-1516486392848-8b67ef89f113?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRhcmt8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
    text: "Coffee",
    audio: track5,
  },
];

const App = () => {
  const [slider, setSlider] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const slideRight = () =>
    slider < 4 ? setSlider((s) => s + 1) : setSlider(0);
  const slideLeft = () =>
    slider >= 1 ? setSlider((s) => s - 1) : setSlider(4);
  const handleKeyDown = ({ key }) => {
    if (key === "ArrowLeft") return slideLeft();
    else if (key === "ArrowRight") return slideRight();
  };
  return (
    <div className="app" tabIndex="0" onKeyDown={(e) => handleKeyDown(e)}>
      <Background
        src={sourceArray[slider].bg}
        isImageLoaded={isImageLoaded}
        setTrue={() => setIsImageLoaded(true)}
        setFalse={() => setIsImageLoaded(false)}
      >
        <TextOverlay text={sourceArray[slider].text} />
      </Background>
      <BgAudio track={sourceArray[slider].audio} />
      <Arrows slideLeft={slideLeft} slideRight={slideRight} />
    </div>
  );
};

export default App;
