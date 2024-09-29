import { useState } from "react";
import CommentSection from "./CommentSection";
import { Box, styled } from "@mui/material";
import ShowUploaded from "./ShowUploaded";

export enum MediaTypeEnum {
  IMAGE = "image",
  VIDEO = "video",
}
interface MediaUploaderProps {
  media: {
    id: string;
    file: File;
    type: MediaTypeEnum;
    filename: string;
  };
  handleMediaLoad: () => void;
  type: MediaUploaderType;
}

export enum MediaUploaderType {
  SELECT = "SELECT",
  UPLOAD = "UPLOAD",
}

interface MediaSizeProps {
  type: MediaUploaderType;
}

const MediaItem = styled(Box)<MediaSizeProps>(({ theme, type }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: type === MediaUploaderType.SELECT ? "200px" : "auto",
    maxWidth: type === MediaUploaderType.SELECT ? "" : "100%",
    cursor: "pointer",
  },
}));

const MediaUploader = ({
  media,
  handleMediaLoad,
  type,
}: MediaUploaderProps) => {
  const [isMediaClicked, setMediaClicked] = useState<{
    [key: string]: boolean;
  }>({});

  const handleMediaClick = (id: string) => {
    setMediaClicked((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <MediaItem key={media.id} type={type}>
      <ShowUploaded
        media={media}
        onLoad={handleMediaLoad}
        onClick={() => handleMediaClick(media.id)}
      />
      {/* Show comment box if media is clicked or a comment exists (non-empty) */}
      {isMediaClicked[media.id] && type === MediaUploaderType.UPLOAD && (
        <CommentSection
          mediaId={media.id}
          placeholder="Add a comment..."
          buttonLabel="Send"
        />
      )}
    </MediaItem>
  );
};

export default MediaUploader;
