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
  onMediaLoad: () => void;
}

interface MediaListProps {
  type: MediaUploaderEnum;
}

const MediaListStyle = styled(Box)<MediaListProps>(({ theme, type }) => ({
  maxHeight: type === MediaUploaderEnum.SELECT ? "250px" : "800px",
  overflowY: "auto",
  border: "1px solid #ccc",
  padding: "10px",
}));

const ShowMediaList = ({
  mediaListRef,
  mediaList,
  onMediaLoad,
  type,
}: ShowMediaListProps) => {
  return (
    <MediaListStyle ref={mediaListRef} type={type}>
      {mediaList.map((media) => (
        <MediaUploader media={media} onMediaLoad={onMediaLoad} type={type} />
      ))}
    </MediaListStyle>
  );
};

export default ShowMediaList;
