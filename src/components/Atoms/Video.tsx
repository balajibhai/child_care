import { useContext } from "react";
import { VideoType } from "../../types/MediaTypes";
import { UploadMediaContext } from "../../Context";

const Video = ({ id, src, onClick, controls }: VideoType) => {
  const { onMediaLoad } = useContext(UploadMediaContext);
  return (
    <>
      <video
        id={id}
        src={src}
        controls={controls}
        onLoadedData={onMediaLoad}
        onClick={onClick}
      />
    </>
  );
};

export default Video;
