import { useState } from "react";
import CommentSection from "./CommentSection";
import { Box, styled } from "@mui/material";
import ShowUploaded from "./ShowUploaded";

export enum mediaType {
  IMAGE = "image",
  VIDEO = "video",
}
interface MediaUploaderProps {
  media: {
    id: string;
    file: File;
    type: mediaType;
    filename: string;
  };
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
}

export enum MediaUploaderEnum {
  SELECT = "SELECT",
  UPLOAD = "UPLOAD",
}

interface MediaSizeProps {
  type: MediaUploaderEnum;
}

const MediaItemCss = {
  SELECT: { width: "200px", maxWidth: "" },
  UPLOAD: { width: "auto", maxWidth: "100%" },
};

const MediaItemStyle = styled(Box)<MediaSizeProps>(({ theme, type }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: MediaItemCss[type].width,
    maxWidth: MediaItemCss[type].maxWidth,
    cursor: "pointer",
  },
}));

const MediaUploader = (props: MediaUploaderProps) => {
  const { media, type, onMediaLoad } = props;
  const [isMediaClicked, setMediaClicked] = useState(false);

  const onMediaClick = () => {
    setMediaClicked(true);
  };

  return (
    <MediaItemStyle key={media.id} type={type}>
      <ShowUploaded media={media} onLoad={onMediaLoad} onClick={onMediaClick} />
      {/* Show comment box if media is clicked or a comment exists (non-empty) */}
      {isMediaClicked && type === MediaUploaderEnum.UPLOAD && (
        <CommentSection />
      )}
    </MediaItemStyle>
  );
};

export default MediaUploader;
