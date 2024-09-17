// src/App.tsx
import React from "react";
import { AppBar, Toolbar } from "@mui/material";
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
            icon="Menu"
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
      </AppBar>
    </div>
  );
};

export default App;
