import { Box, styled } from "@mui/material";
import { CommentData } from "../../types/CommentTypes";
import TimeComponent from "./TimeComponent";
import { SettingsConfigType } from "../../types/ComponentTypes";

// Interface for settings passed to styled component
interface CommentDisplayStyleProps {
  settingsConfiguredValue: SettingsConfigType;
}

interface CommentDisplayProps {
  displayText: CommentData[];
  settingsConfiguredValue: SettingsConfigType;
}

const CommentDisplayStyle = styled(Box)<CommentDisplayStyleProps>(
  ({ theme, settingsConfiguredValue }) => ({
    backgroundColor: "#f0f0f0",
    padding: "5px",
    marginTop: "5px",
    fontSize: settingsConfiguredValue
      ? settingsConfiguredValue.COMMENTS.fontSize
      : "20px",
    color: settingsConfiguredValue
      ? settingsConfiguredValue.COMMENTS.color
      : "black",
  })
);

const CommentDisplay = ({
  displayText,
  settingsConfiguredValue,
}: CommentDisplayProps) => {
  return (
    <>
      {displayText.map((element, index) => {
        return (
          <CommentDisplayStyle
            key={index}
            settingsConfiguredValue={settingsConfiguredValue}
          >
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
