import React, { useRef, useEffect } from "react";
import Text from "../Atoms/Text";
import { Box, styled } from "@mui/material";
import ShowMediaList from "../Molecules/ShowMediaList";
import { MediaTypeEnum, MediaUploaderType } from "../Molecules/MediaUploader";

interface MediaItem {
  id: string;
  file: File;
  type: MediaTypeEnum;
  filename: string;
}

interface UploadMediaProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  handleMediaLoad: () => void;
  type: MediaUploaderType;
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
      if (media.type === MediaTypeEnum.VIDEO && !observers.current[media.id]) {
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
      {type === MediaUploaderType.UPLOAD && (
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
      {type === MediaUploaderType.SELECT && mediaList.length !== 0 && (
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
