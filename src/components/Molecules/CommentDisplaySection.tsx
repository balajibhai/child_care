import { Box, styled } from "@mui/material";
import { CommentData } from "../../types/CommentTypes";
import TimeComponent from "./TimeComponent";

interface CommentDisplayProps {
  displayText: CommentData[];
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
            {element.comment}
            <div>
              <TimeComponent time={element.time} />
            </div>
          </CommentDisplayStyle>
        );
      })}
    </>
  );
};

export default CommentDisplay;
