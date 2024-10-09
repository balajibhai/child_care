import { useContext, useState } from "react";
import Textarea from "../Atoms/Textarea";
import CommentDisplay from "./CommentDisplaySection";
import Button from "../Atoms/Button";
import { Box, styled } from "@mui/material";
import { CommentData } from "../../types/CommentTypes";
import { getTimeString } from "./TimeComponent";
import { UploadMediaContext } from "../../Context";

const CommentBoxStyle = styled(Box)(({ theme }) => ({
  marginTop: "10px",

  "& textarea": {
    width: "100%",
    height: "60px",
  },
}));

const CommentSection = () => {
  const { settingsConfigValue } = useContext(UploadMediaContext);
  const [displayText, setDisplaytext] = useState<CommentData[]>([]);

  const [newComment, setNewComment] = useState<string>("");

  const handleSendClick = () => {
    const time = getTimeString();
    setDisplaytext([...displayText, { comment: newComment, time }]);
    setNewComment("");
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
      <Button onClick={handleSendClick} label={"Send"} disabled={!newComment} />
      {displayText.length > 0 && (
        <CommentDisplay
          displayText={displayText}
          settingsConfigValue={settingsConfigValue}
        />
      )}
    </>
  );
};

export default CommentSection;
