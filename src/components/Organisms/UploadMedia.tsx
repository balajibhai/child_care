import React, { useRef, useEffect } from "react";
import Text from "../Atoms/Text";
import ShowMediaList from "../Molecules/ShowMediaList";
import {
  MediaItem,
  mediaType,
  MediaUploaderEnum,
} from "../../types/ComponentTypes";

interface UploadMediaProps {
  mediaListRef: React.RefObject<HTMLDivElement>;
  mediaList: MediaItem[];
  setPreviewList: (list: MediaItem[]) => void;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
  showPreviewUpload: boolean;
}

const UploadMedia = ({
  mediaListRef,
  mediaList,
  setPreviewList,
  onMediaLoad,
  type,
  showPreviewUpload,
}: UploadMediaProps) => {
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    mediaList.forEach((media: MediaItem) => {
      if (media.type === mediaType.VIDEO && !observers.current[media.id]) {
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
    <>
      {type === MediaUploaderEnum.UPLOAD && (
        <Text variant="h4" content="Media Uploader" />
      )}
      {type === MediaUploaderEnum.SELECT && showPreviewUpload && (
        <Text variant="h6" content="Preview" />
      )}
      <ShowMediaList
        mediaListRef={mediaListRef}
        mediaList={mediaList}
        setPreviewList={setPreviewList}
        onMediaLoad={onMediaLoad}
        type={type}
      />
    </>
  );
};

export default UploadMedia;
