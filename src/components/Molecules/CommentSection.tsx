import { useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplay";

interface CommentSectionProps {
  mediaId: string;
  comments: { [key: string]: string };
  textAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentSection = ({
  mediaId,
  comments,
  textAreaChange,
}: CommentSectionProps) => {
  const [displayText, setDisplaytext] = useState<{ [key: string]: string }>({});

  const handleSendClick = (id: string) => {
    setDisplaytext((prev) => ({
      ...prev,
      [id]: comments[id],
    }));
  };
  return (
    <div>
      <div className="comment-box">
        <Textarea
          value={comments[mediaId]}
          onChange={textAreaChange}
          placeholder="Add a comment..."
        />
      </div>
      <button onClick={() => handleSendClick(mediaId)}>Send</button>
      {displayText[mediaId] && (
        <CommentDisplay displayText={displayText[mediaId]} />
      )}
    </div>
  );
};

export default CommentSection;
