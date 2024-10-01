import { Box, styled } from "@mui/material";

interface CommentDisplayProps {
  displayText: { comment: string; time: JSX.Element }[];
}

const CommentDisplayStyle = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: "5px",
  marginTop: "5px",
}));

const CommentDisplay = ({ displayText }: CommentDisplayProps) => {
  return (
    <>
      {displayText.map((element, index) => {
        return (
          <CommentDisplayStyle key={index}>
            <div>{element.comment}</div>
            <div>{element.time}</div>
          </CommentDisplayStyle>
        );
      })}
    </>
  );
};

export default CommentDisplay;
