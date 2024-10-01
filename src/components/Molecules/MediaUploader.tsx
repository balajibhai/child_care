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
  handleMediaLoad: () => void;
  type: MediaUploaderEnum;
}

export enum MediaUploaderEnum {
  SELECT = "SELECT",
  UPLOAD = "UPLOAD",
}

interface MediaSizeProps {
  type: MediaUploaderEnum;
}

const MediaItemStyle = styled(Box)<MediaSizeProps>(({ theme, type }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: MediaItemCss[type].width,
    maxWidth: MediaItemCss[type].maxWidth,
    cursor: "pointer",
  },
}));

const MediaItemCss = {
  SELECT: { width: "200px", maxWidth: "" },
  UPLOAD: { width: "auto", maxWidth: "100%" },
};

const MediaUploader = (props: MediaUploaderProps) => {
  const { media, type, handleMediaLoad } = props;
  const [isMediaClicked, setMediaClicked] = useState(false);

  const handleMediaClick = (id: string) => {
    setMediaClicked(true);
  };

  return (
    <MediaItemStyle key={media.id} type={type}>
      <ShowUploaded
        media={media}
        onLoad={handleMediaLoad}
        onClick={() => handleMediaClick(media.id)}
      />
      {/* Show comment box if media is clicked or a comment exists (non-empty) */}
      {isMediaClicked && type === MediaUploaderEnum.UPLOAD && (
        <CommentSection mediaId={media.id} placeholder="Add a comment..." />
      )}
    </MediaItemStyle>
  );
};

export default MediaUploader;
