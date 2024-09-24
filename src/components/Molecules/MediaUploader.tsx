import { useState } from "react";
import Image from "../Atoms/Image";
import Video from "../Atoms/Video";
import CommentSection from "./CommentSection";
import { Box, styled } from "@mui/material";

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
      {media.type === "image" ? (
        <Image
          src={media.id}
          alt="Image"
          onLoad={handleMediaLoad}
          onClick={() => handleMediaClick(media.id)}
        />
      ) : (
        <Video
          id={media.id}
          src={media.id}
          onLoadedData={handleMediaLoad}
          onClick={() => handleMediaClick(media.id)}
          controls={true}
        />
      )}

      {/* Show comment box if media is clicked or a comment exists (non-empty) */}
      {isMediaClicked[media.id] && <CommentSection mediaId={media.id} />}
    </MediaItem>
  );
};

export default MediaUploader;
