import { AppBar, Toolbar } from "@mui/material";
import Icons from "../Atoms/Icons";
import Text from "../Text";
import { useState } from "react";
import DrawerComponent from "../Molecules/DrawerComponent";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
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
            toggleDrawer={toggleDrawer}
            isDrawerOpen={isDrawerOpen}
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
        <DrawerComponent
          isDrawerOpen={isDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </AppBar>
    </div>
  );
};

export default Header;
