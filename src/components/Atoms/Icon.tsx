import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";

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
  Settings: SettingsIcon,
};

const Icon = ({ edge, color, sx, icon, onClick }: iconProps) => {
  const Component = ICON_MAP[icon];
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <IconButton edge={edge} color={color} onClick={handleClick} sx={sx}>
      <Component />
    </IconButton>
  );
};

export default Icon;
