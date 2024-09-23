import { useState } from "react";
import Image from "../Atoms/Image";
import Video from "../Atoms/Video";
import CommentSection from "./CommentSection";

interface MediaUploaderProps {
  media: {
    id: string;
    file: File;
    type: "image" | "video";
  };
  handleMediaLoad: () => void;
}

const MediaUploader = ({ media, handleMediaLoad }: MediaUploaderProps) => {
  const [comments, setComments] = useState<{ [key: string]: string }>({});

  const handleCommentChange = (id: string, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
  };
  return (
    <div key={media.id} className="media-item">
      {media.type === "image" ? (
        <Image
          src={media.id}
          alt=""
          onLoad={handleMediaLoad}
          onClick={() =>
            handleCommentChange(media.id, comments[media.id] || "")
          }
        />
      ) : (
        <Video
          id={media.id}
          src={media.id}
          onLoadedData={handleMediaLoad}
          onClick={() =>
            handleCommentChange(media.id, comments[media.id] || "")
          }
        />
      )}
      {comments[media.id] !== undefined && (
        <CommentSection
          mediaId={media.id}
          comments={comments}
          textAreaChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleCommentChange(media.id, e.target.value)
          }
        />
      )}
    </div>
  );
};

export default MediaUploader;
