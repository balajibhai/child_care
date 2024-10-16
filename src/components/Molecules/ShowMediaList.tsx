import { Box, styled } from "@mui/material";
import MediaUploader from "./MediaUploader";
import {
  MediaItem,
  MediaUploaderEnum,
  MediaView,
} from "../../types/ComponentTypes";
import { useContext } from "react";
import { MediaUploaderContext, UploadMediaContext } from "../../Context";

interface ShowMediaListProps {
  mediaList: MediaItem[];
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

const ShowMediaList = ({ mediaView, mediaList }: ShowMediaListProps) => {
  const { setPreviewMediaList, mediaListRef, type } =
    useContext(UploadMediaContext);
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
        <MediaUploaderContext.Provider value={{ onMediaChange, media }}>
          <MediaUploader
            key={media.id}
            media={media}
            type={type}
            mediaView={mediaView}
          />
        </MediaUploaderContext.Provider>
      ))}
    </MediaListStyle>
  );
};

export default ShowMediaList;
