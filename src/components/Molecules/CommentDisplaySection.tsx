import { Box, styled } from "@mui/material";

interface CommentDisplayProps {
  displayText: { [key: string]: JSX.Element }[];
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
        const commentText = Object.keys(element)[0];
        const timeComponent = Object.values(element)[0];

        return (
          <CommentDisplayStyle key={index}>
            <div>{commentText}</div>
            <div>{timeComponent}</div>
          </CommentDisplayStyle>
        );
      })}
    </>
  );
};

export default CommentDisplay;
