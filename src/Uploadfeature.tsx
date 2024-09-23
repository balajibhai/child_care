import React, { useState, useRef, useEffect } from "react";
import "../src/css/Uploadfeature.css";
import Text from "./components/Text";
import UploadButtons from "./components/Molecules/UploadButtons";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
}

const Uploadfeature: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [displayText, setDisplaytext] = useState<{ [key: string]: string }>({});
  const [loadedMediaCount, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});
  const mediaListRef = useRef<HTMLDivElement>(null);

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

  const handleCommentChange = (id: string, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
  };

  const handleSendClick = (id: string) => {
    setDisplaytext((prev) => ({
      ...prev,
      [id]: comments[id],
    }));
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
              threshold: 0.75,
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
    <div className="App">
      <Text variant="h4" content="Media Uploader" component="Typography" />
      <div className="media-list" ref={mediaListRef}>
        {mediaList.map((media, index) => (
          <div key={media.id} className="media-item">
            {media.type === "image" ? (
              <img
                src={media.id}
                alt=""
                onLoad={handleMediaLoad}
                onClick={() =>
                  handleCommentChange(media.id, comments[media.id] || "")
                }
              />
            ) : (
              <video
                id={media.id}
                src={media.id}
                controls
                onLoadedData={handleMediaLoad}
                onClick={() =>
                  handleCommentChange(media.id, comments[media.id] || "")
                }
              />
            )}
            {comments[media.id] !== undefined && (
              <>
                <div className="comment-box">
                  <textarea
                    value={comments[media.id]}
                    onChange={(e) =>
                      handleCommentChange(media.id, e.target.value)
                    }
                    placeholder="Add a comment..."
                  ></textarea>
                </div>
                <button onClick={() => handleSendClick(media.id)}>Send</button>
              </>
            )}
            {displayText[media.id] && (
              <p className="comment-display">{displayText[media.id]}</p>
            )}
          </div>
        ))}
      </div>
      <UploadButtons handleUpload={handleUpload} />
    </div>
  );
};

export default Uploadfeature;
