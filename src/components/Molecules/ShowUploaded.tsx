import Image from "../Atoms/Image";
import Video from "../Atoms/Video";
import { MediaTypeEnum } from "./MediaUploader";

interface ShowUploadedProps {
  media: {
    id: string;
    file: File;
    type: MediaTypeEnum;
    filename: string;
  };
  onLoad: () => void;
  onClick: () => void;
}

const ShowUploaded = ({ media, onLoad, onClick }: ShowUploadedProps) => {
  return (
    <>
      <div>
        {media.type === MediaTypeEnum.IMAGE ? (
          <Image src={media.id} alt="Image" onLoad={onLoad} onClick={onClick} />
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
