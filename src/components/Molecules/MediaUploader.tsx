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
}

const MediaItem = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  position: "relative",

  "& img, & video": {
    maxWidth: "100%",
    cursor: "pointer",
  },
}));

const MediaUploader = ({ media, handleMediaLoad }: MediaUploaderProps) => {
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
    <MediaItem key={media.id}>
      <ShowUploaded
        media={media}
        onLoad={handleMediaLoad}
        onClick={() => handleMediaClick(media.id)}
      />
      {/* Show comment box if media is clicked or a comment exists (non-empty) */}
      {isMediaClicked[media.id] && (
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
