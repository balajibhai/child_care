import React, { useState, useRef, useEffect } from "react";
import Text from "../Atoms/Text";
import MediaUploader from "../Molecules/MediaUploader";
import { Box, styled } from "@mui/material";
import UploadSection from "../Molecules/UploadSection";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
}

const AppContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  padding: "20px",
}));

const MediaList = styled(Box)(({ theme }) => ({
  maxHeight: "800px",
  overflowY: "auto",
  border: "1px solid #ccc",
  padding: "10px",
}));

const UploadMedia: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);

  useEffect(() => {
    mediaList.forEach((media) => {
      if (media.type === "video" && !observers.current[media.id]) {
        const videoElement = document.getElementById(
          media.id
        ) as HTMLVideoElement | null;
        if (videoElement) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  videoElement.play();
                } else {
                  videoElement.pause();
                }
              });
            },
            {
              threshold: 0.75, // play if the video is upto a particular view of 70%
            }
          );
          observer.observe(videoElement);
          observers.current[media.id] = observer;
        }
      }
    });

    // Cleanup only on unmount
    return () => {
      // Clean up observers on unmount
      if (mediaList.length === 0) {
        Object.values(observers.current).forEach((observer) =>
          observer.disconnect()
        );
        observers.current = {};
      }
    };
  }, [mediaList]);

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "video"
  ) => {
    const files = Array.from(event.target.files || []);
    const newMedia = files.map((file) => {
      return {
        id: URL.createObjectURL(file),
        file: file,
        type: type,
      } as MediaItem;
    });
    setNewMediaCount(newMedia.length);
    setLoadedMediaCount(0);
    setMediaList((prev) => [...prev, ...newMedia]);
  };
  const handleMediaLoad = () => {
    setLoadedMediaCount((prev) => {
      const newCount = prev + 1;
      if (newCount === newMediaCount) {
        // All new media items have loaded
        if (mediaListRef.current) {
          mediaListRef.current.scrollTop = mediaListRef.current.scrollHeight;
        }
      }
      return newCount;
    });
  };

  return (
    <AppContainer>
      <Text variant="h4" content="Media Uploader" />
      <MediaList ref={mediaListRef}>
        {mediaList.map((media) => (
          <MediaUploader media={media} handleMediaLoad={handleMediaLoad} />
        ))}
      </MediaList>
      <UploadSection handleUpload={handleUpload} />
    </AppContainer>
  );
};

export default UploadMedia;
