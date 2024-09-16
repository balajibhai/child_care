import React, { useState } from "react";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Text from "./Text";

interface iconProps {
  edge: false | "start" | "end" | undefined;
  color:
    | "inherit"
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning";
  ariaLabel?: string | undefined;
  sx?: object;
  icon: string;
}

// const styledIconButton = styled(IconButton)(({ theme }) => ({}));

const Icons = ({ edge, color, ariaLabel, sx, icon }: iconProps) => {
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
      <IconButton
        edge={edge}
        color={color}
        aria-label={ariaLabel}
        onClick={toggleDrawer(true)}
        sx={sx}
      >
        <MenuIcon />
      </IconButton>
      {/* Side Drawer */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Text
            variant="h6"
            sx={{ p: 2 }}
            content="Side Pane"
            component="Typography"
          />
          <Text sx={{ p: 2 }} content="Menu Item 1" component="Typography" />
          <Text sx={{ p: 2 }} content="Menu Item 2" component="Typography" />
        </Box>
      </Drawer>
    </div>
  );
};

export default Icons;
