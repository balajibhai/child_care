import { Box, styled } from "@mui/material";
import { CommentData } from "../../types/CommentTypes";
import TimeComponent from "./TimeComponent";
import { SettingsConfigType } from "../../types/ComponentTypes";

// Interface for settings passed to styled component
interface CommentDisplayStyleProps {
  settingsConfigValue: SettingsConfigType;
}

interface CommentDisplayProps {
  displayText: CommentData[];
  settingsConfigValue: SettingsConfigType;
}

const CommentDisplayStyle = styled(Box)<CommentDisplayStyleProps>(
  ({ theme, settingsConfigValue }) => ({
    backgroundColor: "#f0f0f0",
    padding: "5px",
    marginTop: "5px",
    fontSize: settingsConfigValue
      ? settingsConfigValue.PREVIEW.fontSize
      : "20px",
  })
);

const CommentDisplay = ({
  displayText,
  settingsConfigValue,
}: CommentDisplayProps) => {
  return (
    <>
      {displayText.map((element, index) => {
        return (
          <CommentDisplayStyle
            key={index}
            settingsConfigValue={settingsConfigValue}
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
