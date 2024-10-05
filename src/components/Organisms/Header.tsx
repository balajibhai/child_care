import { AppBar, Toolbar } from "@mui/material";
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";
import { useState } from "react";
import DrawerComponent from "../Molecules/DrawerComponent";
import SettingsPopup from "../Molecules/SettingsPopup";
import { SettingsConfigType } from "../../types/ComponentTypes";

/**
 * 1) When settings icon is clicked, the popup has to be opened
 * 2) The popup's state is maintained in this component
 *
 */

type HeaderProps = {
  settingsConfig: (paneConfig: SettingsConfigType) => void;
  settingsConfigValue: SettingsConfigType;
};

const Header = (props: HeaderProps) => {
  const { settingsConfig, settingsConfigValue } = props;
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [popupState, setPopupState] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const onDrawerClose = () => {
    setDrawerOpen(false);
  };

  const onPopupOpen = () => {
    setPopupState(true);
  };

  const onPopupSubmit = (paneConfig: SettingsConfigType) => {
    setPopupState(false);
    settingsConfig(paneConfig);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Left: Hamburger Icon */}
        <Icon
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
          icon="Menu"
          onClick={toggleDrawer}
        />
        {/* Title */}
        <Text variant="h6" sx={{ flexGrow: 1 }} content="Child Care" />
        <Icon edge="end" color="inherit" icon="Account" />
        <Icon
          edge="end"
          color="inherit"
          icon="Settings"
          onClick={onPopupOpen}
        />
      </Toolbar>
      <DrawerComponent isOpen={isDrawerOpen} onClose={onDrawerClose} />
      <SettingsPopup
        popupState={popupState}
        onPopupSubmit={onPopupSubmit}
        settingsConfigValue={settingsConfigValue}
      />
    </AppBar>
  );
};

export default Header;
