import { useEffect, useState } from "react";
import Image from "../Atoms/Image";
import Video from "../Atoms/Video";
import { MediaItem, mediaType } from "../../types/ComponentTypes";

interface ShowUploadedProps {
  media: MediaItem;
  onClick?: () => void;
}

const ShowUploaded = (props: ShowUploadedProps) => {
  const [mediaUrl, setMediaUrl] = useState("");
  const { onClick = () => {}, media } = props;

  useEffect(() => {
    // Generate a blob URL for the media file
    const url = URL.createObjectURL(media.file);
    setMediaUrl(url);

    // Clean up the object URL when the component unmounts
    return () => URL.revokeObjectURL(url);
  }, [media.file]);
  return (
    <>
      <div>
        {media.type === mediaType.IMAGE ? (
          <Image src={mediaUrl} alt="Image" onClick={onClick} />
        ) : (
          <Video
            id={media.id}
            src={media.id}
            onClick={onClick}
            controls={true}
          />
        )}
      </div>
      <div>{media.filename}</div>
      <div>{media.time}</div>
    </>
  );
};

export default ShowUploaded;
