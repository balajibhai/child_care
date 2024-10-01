import { Box, styled } from "@mui/material";
import MediaUploader, { mediaType, MediaUploaderEnum } from "./MediaUploader";

interface MediaItem {
  id: string;
  file: File;
  type: mediaType;
  filename: string;
}

interface ShowMediaListProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  type: MediaUploaderEnum;
  handleMediaLoad: () => void;
}

interface MediaListProps {
  type: MediaUploaderEnum;
}

const MediaList = styled(Box)<MediaListProps>(({ theme, type }) => ({
  maxHeight: type === MediaUploaderEnum.SELECT ? "250px" : "800px",
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
    <MediaList ref={mediaListRef} type={type}>
      {mediaList.map((media) => (
        <MediaUploader
          media={media}
          handleMediaLoad={handleMediaLoad}
          type={type}
        />
      ))}
    </MediaList>
  );
};

export default ShowMediaList;
