import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
  sx?: object;
  icon: keyof typeof ICON_MAP;
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void | undefined;
  isDrawerOpen?: boolean;
}

const ICON_MAP = {
  Menu: MenuIcon,
  Account: AccountCircleIcon,
};

const Icons = ({
  edge,
  color,
  sx,
  icon,
  toggleDrawer,
  isDrawerOpen,
}: iconProps) => {
  const Component = ICON_MAP[icon];
  const handleClick = (event: React.MouseEvent) => {
    if (icon === "Menu") {
      return toggleDrawer && toggleDrawer(!isDrawerOpen)(event);
    }
  };
  return (
    <IconButton edge={edge} color={color} onClick={handleClick} sx={sx}>
      <Component />
    </IconButton>
  );
};

export default Icons;
