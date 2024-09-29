import { Box, styled } from "@mui/material";
import MediaUploader, {
  MediaTypeEnum,
  MediaUploaderType,
} from "./MediaUploader";

interface MediaItem {
  id: string;
  file: File;
  type: MediaTypeEnum;
  filename: string;
}

interface ShowMediaListProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  type: MediaUploaderType;
  handleMediaLoad: () => void;
}

interface MediaListProps {
  type: MediaUploaderType;
}

const MediaList = styled(Box)<MediaListProps>(({ theme, type }) => ({
  maxHeight: type === MediaUploaderType.SELECT ? "250px" : "800px",
  overflowY: "auto",
  border: "1px solid #ccc",
  padding: "10px",
}));

const ShowMediaList = ({
  mediaListRef,
  mediaList,
  handleMediaLoad,
  type,
}: ShowMediaListProps) => {
  return (
    <div>
      <MediaList ref={mediaListRef} type={type}>
        {mediaList.map((media) => (
          <MediaUploader
            media={media}
            handleMediaLoad={handleMediaLoad}
            type={type}
          />
        ))}
      </MediaList>
    </div>
  );
};

export default ShowMediaList;
