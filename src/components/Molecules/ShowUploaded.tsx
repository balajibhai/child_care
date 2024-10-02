import { useEffect, useState } from "react";
import Image from "../Atoms/Image";
import Video from "../Atoms/Video";
import { mediaType } from "../../types/ComponentTypes";

interface ShowUploadedProps {
  media: {
    id: string;
    file: File;
    type: mediaType;
    filename: string;
  };
  onLoad: () => void;
  onClick?: () => void;
}

const ShowUploaded = (props: ShowUploadedProps) => {
  const [mediaUrl, setMediaUrl] = useState("");
  const { onClick = () => {}, media, onLoad } = props;

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
          <Image src={mediaUrl} alt="Image" onLoad={onLoad} onClick={onClick} />
        ) : (
          <Video
            id={media.id}
            src={media.id}
            onLoadedData={onLoad}
            onClick={onClick}
            controls={true}
          />
        )}
      </div>
      <div>{media.filename}</div>
    </>
  );
};

export default ShowUploaded;
