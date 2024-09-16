// src/App.tsx
import React from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Text from "./components/Text";
import Icons from "./components/Icons";

const App: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <AppBar position="static">
        <Toolbar>
          {/* Left: Hamburger Icon */}
          <Icons
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            icon="MenuIcon"
          />

          {/* Title */}
          <Text
            variant="h6"
            sx={{ flexGrow: 1 }}
            content="Child Care"
            component="Typography"
          />

          {/* Right: Account Icon */}
          <IconButton edge="end" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          {/* <Icons edge="end" color="inherit" icon="AccountCircleIcon" /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
