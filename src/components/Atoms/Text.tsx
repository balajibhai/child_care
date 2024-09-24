import { Typography } from "@mui/material";

interface textProps {
  variant?:
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "body2"
    | "body1"
    | "subtitle1"
    | "subtitle2"
    | "overline";
  content: string;
  sx?: object;
}

const Text = ({ variant, content, sx }: textProps) => {
  return (
    <Typography variant={variant} sx={sx}>
      {content}
    </Typography>
  );
};

export default Text;
