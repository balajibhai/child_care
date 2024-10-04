import { Box, styled } from "@mui/material";
import MediaUploader from "./MediaUploader";
import {
  MediaItem,
  MediaUploaderEnum,
  MediaView,
} from "../../types/ComponentTypes";

interface ShowMediaListProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  setPreviewMediaList: (list: MediaItem[]) => void;
  type: MediaUploaderEnum;
  onMediaLoad: () => void;
  mediaView: MediaView;
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
  setPreviewMediaList,
  onMediaLoad,
  type,
  mediaView,
}: ShowMediaListProps) => {
  const onMediaChange = (updatedMedia: MediaItem) => {
    const mediaIndex = mediaList
      .map((media) => media.id)
      .indexOf(updatedMedia.id);
    if (mediaIndex === -1) throw new Error("media not found");
    mediaList[mediaIndex] = updatedMedia;
    setPreviewMediaList([...mediaList]);
  };
  return (
    <MediaListStyle ref={mediaListRef} type={type}>
      {mediaList.map((media) => (
        <MediaUploader
          key={media.id}
          media={media}
          onMediaLoad={onMediaLoad}
          type={type}
          onMediaChange={onMediaChange}
          mediaView={mediaView}
        />
      ))}
    </MediaListStyle>
  );
};

export default ShowMediaList;
