import Image from "../Atoms/Image";
import Video from "../Atoms/Video";

interface ShowUploadedProps {
  media: {
    id: string;
    file: File;
    type: "image" | "video";
  };
  onLoad: () => void;
  onClick: () => void;
}

const ShowUploaded = ({ media, onLoad, onClick }: ShowUploadedProps) => {
  return (
    <div>
      {media.type === "image" ? (
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
  );
};

export default ShowUploaded;
