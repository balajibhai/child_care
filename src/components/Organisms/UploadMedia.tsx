import React, { useState, useRef, useEffect } from "react";
import Text from "../Atoms/Text";
import { Box, styled } from "@mui/material";
import UploadSection from "../Molecules/UploadSection";
import ShowMediaList from "../Molecules/ShowMediaList";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
}

interface fileProps {
  type: string;
}

const AppContainer = styled(Box)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  padding: "20px",
}));

const UploadMedia: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [type, setType] = useState("");

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

  const getType = (file: fileProps) => {
    if (file.type.startsWith("image/")) {
      return "image";
    } else if (file.type.startsWith("video/")) {
      return "video";
    }
  };

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const files = Array.from(event.target.files || []);
    const newMedia = files.map((file) => {
      return {
        id: URL.createObjectURL(file),
        file: file,
        type: getType(file),
      } as MediaItem;
    });
    setNewMediaCount(newMedia.length);
    setLoadedMediaCount(0);
    setMediaList((prev) => [...prev, ...newMedia]);
    setType(type);
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

  const handleCancel = () => {
    setMediaList([]);
  };

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
      <UploadSection handleUpload={handleUpload} handleCancel={handleCancel} />
    </AppContainer>
  );
};

export default UploadMedia;
