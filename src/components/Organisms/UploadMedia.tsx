import { useRef, useEffect, useContext } from "react";
import Text from "../Atoms/Text";
import ShowMediaList from "../Molecules/ShowMediaList";
import { MediaItem, mediaType, MediaView } from "../../types/ComponentTypes";
import { HomePageContext } from "../../Context";

interface UploadMediaProps {
  mediaList: MediaItem[];
  previewMediaList: MediaItem[];
}

const UploadMedia = (props: UploadMediaProps) => {
  const { mediaList, previewMediaList } = props;
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});
  const { settingsConfiguredValue } = useContext(HomePageContext);

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
      {mediaList.length > 0 && (
        <>
          <Text
            variant="h4"
            content="Media Uploader"
            sx={settingsConfiguredValue.MEDIA}
          />
          <ShowMediaList mediaView={MediaView.UPLOADED} mediaList={mediaList} />
        </>
      )}
      <Text
        variant="h6"
        content="Preview"
        sx={settingsConfiguredValue.PREVIEW}
      />
      <ShowMediaList
        mediaView={MediaView.PREVIEW}
        mediaList={previewMediaList}
      />
    </>
  );
};

export default UploadMedia;
