export const BgAudio = ({ track }) => {
  return (
    <div className="audio">
      <audio controls src={track} autoPlay>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
    </div>
  );
};
