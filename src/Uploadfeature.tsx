import React, { useState, useRef, useEffect } from "react";
import "../src/css/Uploadfeature.css";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
}

const Uploadfeature: React.FC = () => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const observers = useRef<{ [key: string]: IntersectionObserver }>({});

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
    setMediaList((prev) => [...prev, ...newMedia]);
  };

  const handleCommentChange = (id: string, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
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
    return () => {
      // Clean up observers on unmount
      Object.values(observers.current).forEach((observer) =>
        observer.disconnect()
      );
    };
  }, [mediaList]);

  return (
    <div className="App">
      <h1>Media Uploader</h1>
      <div className="upload-buttons">
        <label>
          Upload Photo
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleUpload(e, "image")}
          />
        </label>
        <label>
          Upload Video
          <input
            type="file"
            accept="video/*"
            multiple
            onChange={(e) => handleUpload(e, "video")}
          />
        </label>
      </div>
      <div className="media-list">
        {mediaList.map((media) => (
          <div key={media.id} className="media-item">
            {media.type === "image" ? (
              <img
                src={media.id}
                alt=""
                onClick={() =>
                  handleCommentChange(media.id, comments[media.id] || "")
                }
              />
            ) : (
              <video
                id={media.id}
                src={media.id}
                controls
                onClick={() =>
                  handleCommentChange(media.id, comments[media.id] || "")
                }
              />
            )}
            {comments[media.id] !== undefined && (
              <div className="comment-box">
                <textarea
                  value={comments[media.id]}
                  onChange={(e) =>
                    handleCommentChange(media.id, e.target.value)
                  }
                  placeholder="Add a comment..."
                ></textarea>
              </div>
            )}
            {comments[media.id] && (
              <p className="comment-display">{comments[media.id]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Uploadfeature;
