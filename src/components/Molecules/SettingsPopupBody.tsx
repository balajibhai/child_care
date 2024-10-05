import { Box, styled } from "@mui/material";
import {
  configuredValue,
  PaneType,
  SettingsConfigType,
} from "../../types/ComponentTypes";
import Dropdown from "../Atoms/Dropdown";

type SettingsPopupBodyProps = {
  onConfiguring: (value: configuredValue) => void;
  settingsConfigValue: SettingsConfigType;
};

const SettingsPopupBodyStyle = styled(Box)(({ theme }) => ({
  width: "500px",
}));

/**
 *
 * 1) There are three sections: Preview, Media Uploader and Comments
 * => These components will be called in this component
 * 2) Each of these sections has a dropdown called fontsize to select
 * 3) Send the values received from the dropdown to the parent
 *
 */

const SettingsPopupBody = (props: SettingsPopupBodyProps) => {
  const { onConfiguring, settingsConfigValue } = props;
  const fontSize = [
    "10px",
    "20px",
    "30px",
    "40px",
    "50px",
    "60px",
    "70px",
    "80px",
  ];
  const color = ["blue", "green", "yellow", "pink", "violet", "orange", "red"];

  /*
   * The getPrevValue function is for setting the dropdown to the previous value when
   * opening again after apply is clicked
   */

  const getPrevValue = (panetype: PaneType) => {
    return settingsConfigValue[panetype];
  };

  return (
    <SettingsPopupBodyStyle>
      <div>Preview</div>
      <Dropdown
        label="font size"
        paneType={PaneType.PREVIEW}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.PREVIEW).fontSize}
        valueList={fontSize}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.PREVIEW}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.PREVIEW).color}
        valueList={color}
      />
      <div>Media Uploader</div>
      <Dropdown
        label="font size"
        paneType={PaneType.MEDIA}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.MEDIA).fontSize}
        valueList={fontSize}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.MEDIA}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.MEDIA).color}
        valueList={color}
      />
      <div>Comments</div>
      <Dropdown
        label="font size"
        paneType={PaneType.COMMENTS}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.COMMENTS).fontSize}
        valueList={fontSize}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.COMMENTS}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.COMMENTS).color}
        valueList={color}
      />
    </SettingsPopupBodyStyle>
  );
};

export default SettingsPopupBody;
