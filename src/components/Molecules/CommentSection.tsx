import { useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplaySection";
import Button from "../Atoms/Button";
import { Box, styled } from "@mui/material";
import GetTime from "./GetTime";

interface CommentSectionProps {
  mediaId: string;
}

// Define CommentData type where the key is a comment and the value is a JSX element
interface CommentData {
  [key: string]: JSX.Element;
}

const CommentBox = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = ({ mediaId }: CommentSectionProps) => {
  const [displayText, setDisplaytext] = useState<{
    [key: string]: CommentData[];
  }>({});

  const [comments, setComments] = useState<{ [key: string]: string }>({});

  const handleSendClick = (id: string) => {
    setDisplaytext((prev) => ({
      ...prev,
      [id]: prev[id]
        ? [...prev[id], { [comments[id]]: <GetTime /> }] // Add new comment and GetTime component
        : [{ [comments[id]]: <GetTime /> }], // Initialize if no comments exist
    }));
  };

  const handleCommentChange = (id: string, comment: string) => {
    setComments((prev) => ({
      ...prev,
      [id]: comment,
    }));
  };

  return (
    <>
      <CommentBox>
        <Textarea
          value={comments[mediaId]}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleCommentChange(mediaId, e.target.value)
          }
          placeholder="Add a comment..."
        />
      </CommentBox>
      <Button
        onClick={() => handleSendClick(mediaId)}
        label="Send"
        disabled={!comments[mediaId]}
      />
      {displayText[mediaId] && (
        <CommentDisplay displayText={displayText[mediaId]} />
      )}
    </>
  );
};

export default CommentSection;
