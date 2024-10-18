import { VideoType } from "../../types/MediaTypes";

const Video = ({ id, src, onClick, controls, onLoadedData }: VideoType) => {
  return (
    <>
      <video
        id={id}
        src={src}
        controls={controls}
        onLoadedData={onLoadedData}
        onClick={onClick}
      />
    </>
  );
};

export default Video;
