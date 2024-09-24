import React from "react";
import UploadButton from "../Atoms/UploadButton";

interface UploadButtonsProps {
  // Define the type of handleUpload function
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "video"
  ) => void;
}

const UploadButtons = ({ handleUpload }: UploadButtonsProps) => {
  return (
    <>
      <UploadButton
        accept="image/*"
        multiple={true}
        onChange={(e) => handleUpload(e, "image")}
        label="Upload Photo"
      />
      <UploadButton
        accept="video/*"
        multiple={true}
        onChange={(e) => handleUpload(e, "video")}
        label="Upload Video"
      />
    </>
  );
};

export default UploadButtons;
