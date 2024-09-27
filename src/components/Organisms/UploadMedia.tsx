import React, { useRef, useEffect } from "react";
import Text from "../Atoms/Text";
import { Box, styled } from "@mui/material";
import ShowMediaList from "../Molecules/ShowMediaList";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
  filename: string;
}

interface UploadMediaProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  handleMediaLoad: () => void;
  type: string;
}

const AppContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  padding: "20px",
}));

const UploadMedia = ({
  mediaListRef,
  mediaList,
  handleMediaLoad,
  type,
}: UploadMediaProps) => {
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    mediaList.forEach((media: MediaItem) => {
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

  return (
    <AppContainer>
      {type === "upload" && (
        <>
          <Text variant="h4" content="Media Uploader" />
          <ShowMediaList
            mediaListRef={mediaListRef}
            mediaList={mediaList}
            handleMediaLoad={handleMediaLoad}
            type={type}
          />
        </>
      )}
      {type === "select" && mediaList.length !== 0 && (
        <>
          <Text variant="h6" content="Preview" />
          <ShowMediaList
            mediaListRef={mediaListRef}
            mediaList={mediaList}
            handleMediaLoad={handleMediaLoad}
            type={type}
          />
        </>
      )}
    </AppContainer>
  );
};

export default UploadMedia;
