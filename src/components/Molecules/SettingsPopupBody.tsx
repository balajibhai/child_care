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

  /*
   * The getPrevValue function is for setting the dropdown to the previous value when
   * opening again after apply is clicked
   */

  const getPrevValue = (panetype: PaneType) => {
    return settingsConfigValue[panetype].fontSize.replace("px", ""); // The fontsize will be in string (eg: 10px), we need only the string number as value prop in dropdown component is a number value in string
  };

  return (
    <SettingsPopupBodyStyle>
      <div>Preview</div>
      <Dropdown
        label="font size"
        paneType={PaneType.PREVIEW}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.PREVIEW)}
      />
      <div>Media Uploader</div>
      <Dropdown
        label="font size"
        paneType={PaneType.MEDIA}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.MEDIA)}
      />
      <div>Comments</div>
      <Dropdown
        label="font size"
        paneType={PaneType.COMMENTS}
        onConfiguring={onConfiguring}
        prevValue={getPrevValue(PaneType.COMMENTS)}
      />
    </SettingsPopupBodyStyle>
  );
};

export default SettingsPopupBody;
