import { AppBar, Toolbar } from "@mui/material";
import Icon from "../Atoms/Icon";
import Text from "../Atoms/Text";
import { useContext, useState } from "react";
import DrawerComponent from "../Molecules/DrawerComponent";
import SettingsPopup from "../Molecules/SettingsPopup";
import { SettingsConfigType } from "../../types/ComponentTypes";
import { HomePageContext, SettingsPopupContext } from "../../Context";

/**
 * 1) When settings icon is clicked, the popup has to be opened
 * 2) The popup's state is maintained in this component
 *
 */

const Header = () => {
  const { setSettingsConfiguredValue } = useContext(HomePageContext);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const onDrawerClose = () => {
    setDrawerOpen(false);
  };

  const onPopupOpen = () => {
    setIsPopupOpen(true);
  };

  const onPopupSubmit = (paneConfig: SettingsConfigType) => {
    setIsPopupOpen(false);
    setSettingsConfiguredValue(paneConfig);
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
      <SettingsPopup isPopupOpen={isPopupOpen} onPopupSubmit={onPopupSubmit} />
    </AppBar>
  );
};

export default Header;
