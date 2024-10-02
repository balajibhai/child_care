import { useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplaySection";
import Button from "../Atoms/Button";
import { Box, styled } from "@mui/material";
import { CommentData } from "../../types/CommentTypes";
import { getTimeString } from "./TimeComponent";

// Define CommentData type where the key is a comment and the value is a JSX element

const CommentBoxStyle = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = () => {
  const [displayText, setDisplaytext] = useState<CommentData[]>([]);

  const [newComment, setNewComment] = useState<string>("");

  const handleSendClick = () => {
    const time = getTimeString();
    setDisplaytext([...displayText, { comment: newComment, time }]);
  };

  const onCommentChange = (comment: string) => {
    setNewComment(comment);
  };

  return (
    <>
      <CommentBoxStyle>
        <Textarea
          value={newComment}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onCommentChange(e.target.value)
          }
          placeholder="Add a comment ..."
        />
      </CommentBoxStyle>
      <Button
        onClick={() => handleSendClick()}
        label={"Send"}
        disabled={!newComment}
      />
      {displayText.length > 0 && <CommentDisplay displayText={displayText} />}
    </>
  );
};

export default CommentSection;
