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

const CommentBoxStyle = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = ({ mediaId, placeholder }: CommentSectionProps) => {
  const [displayText, setDisplaytext] = useState<{
    [mediaId: string]: CommentData[];
  }>({});

  const [comments, setComments] = useState<{ [mediaId: string]: string }>({});

  const handleSendClick = (mediaId: string) => {
    setDisplaytext((displayText) => {
      const currentComments = displayText[mediaId];
      const comment = comments[mediaId];
      const time = <TimeComponent />;

      // Check if there are existing comments for the given id
      if (currentComments) {
        // Add new comment to the existing array of comments
        return {
          ...displayText,
          [mediaId]: [...currentComments, { comment, time }],
        };
      } else {
        // Initialize the comments array if none exist
        return {
          ...displayText,
          [mediaId]: [{ comment, time }],
        };
      }
    });
  };

  const onCommentChange = (mediaId: string, comment: string) => {
    setComments((comments) => ({
      ...comments,
      [mediaId]: comment,
    }));
  };

  return (
    <>
      <CommentBoxStyle>
        <Textarea
          value={comments[mediaId]}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onCommentChange(mediaId, e.target.value)
          }
          placeholder={placeholder}
        />
      </CommentBoxStyle>
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
