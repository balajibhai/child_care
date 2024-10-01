import { useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplaySection";
import Button from "../Atoms/Button";
import { Box, styled } from "@mui/material";
import TimeComponent from "./TimeComponent";

interface CommentSectionProps {
  mediaId: string;
  placeholder: string;
}

// Define CommentData type where the key is a comment and the value is a JSX element
interface CommentData {
  comment: string;
  time: JSX.Element;
}

const CommentBox = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = ({ mediaId, placeholder }: CommentSectionProps) => {
  const [displayText, setDisplaytext] = useState<{
    [key: string]: CommentData[];
  }>({});

  const [comments, setComments] = useState<{ [key: string]: string }>({});

  const handleSendClick = (id: string) => {
    setDisplaytext((prev) => {
      const currentComments = prev[id];
      const comment = comments[id];
      const time = <TimeComponent />;

      // Check if there are existing comments for the given id
      if (currentComments) {
        // Add new comment to the existing array of comments
        return {
          ...prev,
          [id]: [...currentComments, { comment, time }],
        };
      } else {
        // Initialize the comments array if none exist
        return {
          ...prev,
          [id]: [{ comment, time }],
        };
      }
    });
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
          placeholder={placeholder}
        />
      </CommentBox>
      <Button
        onClick={() => handleSendClick(mediaId)}
        label={"Send"}
        disabled={!comments[mediaId]}
      />
      {displayText[mediaId] && (
        <CommentDisplay displayText={displayText[mediaId]} />
      )}
    </>
  );
};

export default CommentSection;
