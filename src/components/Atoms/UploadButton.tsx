import { Box, styled } from "@mui/material";
import React from "react";

interface UploadButtonProps {
  // Define the type of handleUpload function
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  accept: string;
  multiple: boolean;
  label: string;
}

const UploadButtonsStyle = styled(Box)(({ theme }) => ({
  position: "sticky",
  bottom: 0,
  backgroundColor: "blueviolet",
  color: "white",
  width: "fit-content",

  "& label": {
    marginRight: "10px",
    cursor: "pointer",
  },

  "& input": {
    display: "none",
  },
}));

const UploadButton = ({
  onChange,
  accept,
  multiple,
  label,
}: UploadButtonProps) => {
  return (
    <UploadButtonsStyle>
      <label>
        {label}
        <input
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={onChange}
        />
      </label>
    </UploadButtonsStyle>
  );
};

export default UploadButton;
