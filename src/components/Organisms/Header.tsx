import { AppBar, Toolbar } from "@mui/material";
import Icons from "../Atoms/Icons";
import Text from "../Text";
import { useState } from "react";
import DrawerComponent from "../Molecules/DrawerComponent";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const onDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Left: Hamburger Icon */}
          <Icons
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            icon="Menu"
            onClick={toggleDrawer}
          />
          {/* Title */}
          <Text
            variant="h6"
            sx={{ flexGrow: 1 }}
            content="Child Care"
            component="Typography"
          />
          <Icons edge="end" color="inherit" icon="Account" />
        </Toolbar>
        <DrawerComponent isOpen={isDrawerOpen} onClose={onDrawerClose} />
      </AppBar>
    </div>
  );
};

export default Header;
