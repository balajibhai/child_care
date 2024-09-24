import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface iconProps {
  edge?: "start" | "end" | undefined;
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
  onClick?: () => void;
}

const ICON_MAP = {
  Menu: MenuIcon,
  Account: AccountCircleIcon,
};

const Icons = ({ edge, color, sx, icon, onClick }: iconProps) => {
  const Component = ICON_MAP[icon];
  const handleClick = (event: React.MouseEvent) => {
    onClick && onClick();
  };
  return (
    <IconButton edge={edge} color={color} onClick={handleClick} sx={sx}>
      <Component />
    </IconButton>
  );
};

export default Icons;
