import { Box, styled } from "@mui/material";

interface CommentDisplayProps {
  displayText: string[];
}

const CommentDisplayStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: "5px",
  marginTop: "5px",
}));

const CommentDisplay = ({ displayText }: CommentDisplayProps) => {
  return (
    <>
      {displayText.map((text) => (
        <>
          <CommentDisplayStyle>{text}</CommentDisplayStyle>
        </>
      ))}
    </>
  );
};

export default CommentDisplay;
