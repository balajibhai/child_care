import { useState } from "react";
import CommentSection from "./CommentSection";
import { Box, styled } from "@mui/material";
import ShowUploaded from "./ShowUploaded";

interface MediaUploaderProps {
  media: {
    id: string;
    file: File;
    type: "image" | "video";
  };
  handleMediaLoad: () => void;
  type: string;
}

interface MediaSizeProps {
  type: string;
}

const MediaItem = styled(Box)<MediaSizeProps>(({ theme, type }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    width: type === "select" ? "200px" : "auto",
    maxWidth: type === "select" ? "" : "100%",
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
      {isMediaClicked[media.id] && type !== "select" && (
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
