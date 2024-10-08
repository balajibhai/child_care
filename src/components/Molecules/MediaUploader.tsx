import { useState } from "react";
import CommentSection from "./CommentSection";
import { Box, styled } from "@mui/material";
import ShowUploaded from "./ShowUploaded";
import {
  MediaUploaderEnum,
  MediaUploaderProps,
  MediaView,
} from "../../types/ComponentTypes";
import { PreviewMedia } from "./PreviewMedia";

const PreviewMediaStyle = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: "200px",
    maxWidth: "",
    cursor: "pointer",
  },
}));

const UploadedMediaStyle = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: "auto",
    maxWidth: "100%",
    cursor: "pointer",
  },
}));

const MediaUploader = (props: MediaUploaderProps) => {
  const { media, type, onMediaLoad, mediaView, settingsConfigValue } = props;
  const [isMediaClicked, setMediaClicked] = useState(false);

  const onMediaClick = () => {
    setMediaClicked(true);
  };

  return (
    <>
      <PreviewMediaStyle key={media.id}>
        {mediaView === MediaView.PREVIEW && <PreviewMedia {...props} />}
      </PreviewMediaStyle>
      <UploadedMediaStyle key={media.id}>
        {mediaView === MediaView.UPLOADED && (
          <ShowUploaded
            media={media}
            onLoad={onMediaLoad}
            onClick={onMediaClick}
          />
        )}
        {/* Show comment box if media is clicked or a comment exists (non-empty) */}
        {isMediaClicked && type === MediaUploaderEnum.UPLOAD && (
          <CommentSection settingsConfigValue={settingsConfigValue} />
        )}
      </UploadedMediaStyle>
    </>
  );
};

export default MediaUploader;
