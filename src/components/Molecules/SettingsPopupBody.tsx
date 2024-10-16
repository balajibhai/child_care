import { Box, styled } from "@mui/material";
import { DropdownAttribute, PaneType } from "../../types/ComponentTypes";
import Dropdown from "../Atoms/Dropdown";
import { useContext } from "react";
import { HomePageContext, SettingsPopupContext } from "../../Context";

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

const SettingsPopupBody = () => {
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
  const { settingsConfiguredValue } = useContext(HomePageContext);
  const { onConfiguringSettings } = useContext(SettingsPopupContext);

  /*
   * The getPrevValue function is for setting the dropdown to the previous value when
   * opening again after apply is clicked
   */

  const getPrevValue = (panetype: PaneType) => {
    return settingsConfiguredValue[panetype];
  };

  return (
    <SettingsPopupBodyStyle>
      <div>Preview</div>
      <Dropdown
        label="font size"
        paneType={PaneType.PREVIEW}
        prevValue={getPrevValue(PaneType.PREVIEW).fontSize}
        valueList={fontSize}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.FONTSIZE}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.PREVIEW}
        prevValue={getPrevValue(PaneType.PREVIEW).color}
        valueList={color}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.COLOR}
      />
      <div>Media Uploader</div>
      <Dropdown
        label="font size"
        paneType={PaneType.MEDIA}
        prevValue={getPrevValue(PaneType.MEDIA).fontSize}
        valueList={fontSize}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.FONTSIZE}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.MEDIA}
        prevValue={getPrevValue(PaneType.MEDIA).color}
        valueList={color}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.COLOR}
      />
      <div>Comments</div>
      <Dropdown
        label="font size"
        paneType={PaneType.COMMENTS}
        prevValue={getPrevValue(PaneType.COMMENTS).fontSize}
        valueList={fontSize}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.FONTSIZE}
      />
      <Dropdown
        label="font color"
        paneType={PaneType.COMMENTS}
        prevValue={getPrevValue(PaneType.COMMENTS).color}
        valueList={color}
        onConfiguringSettings={onConfiguringSettings}
        attribute={DropdownAttribute.COLOR}
      />
    </SettingsPopupBodyStyle>
  );
};

export default SettingsPopupBody;
