import { useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplay";
import Button from "../Atoms/Button";
import { Box, styled } from "@mui/material";

interface CommentSectionProps {
  mediaId: string;
}

const CommentBox = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = ({ mediaId }: CommentSectionProps) => {
  const [displayText, setDisplaytext] = useState<{ [key: string]: string }>({});
  const [comments, setComments] = useState<{ [key: string]: string }>({});

  const handleSendClick = (id: string) => {
    setDisplaytext((prev) => ({
      ...prev,
      [id]: comments[id],
    }));
  };

  const handleCommentChange = (id: string, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
  };
  return (
    <div>
      <CommentBox>
        <Textarea
          value={comments[mediaId]}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleCommentChange(mediaId, e.target.value)
          }
          placeholder="Add a comment..."
        />
      </CommentBox>
      <Button onClick={() => handleSendClick(mediaId)} label="Send" />
      {displayText[mediaId] && (
        <CommentDisplay displayText={displayText[mediaId]} />
      )}
    </div>
  );
};

export default CommentSection;
