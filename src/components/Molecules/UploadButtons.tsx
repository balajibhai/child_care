import React, { useState } from "react";
import UploadButton from "../Atoms/UploadButton";
import Button from "../Atoms/Button";

interface UploadButtonsProps {
  // Define the type of handleUpload function
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  showUploadButton: boolean;
  onUpload: () => void;
}

const UploadButtons = ({
  handleUpload,
  handleCancel,
  onUpload,
  showUploadButton,
}: UploadButtonsProps) => {
  const [selectFileClick, setSelectFileClick] = useState(true);
  const onButtonClick = () => {
    setSelectFileClick(true);
    handleCancel();
  };
  const onUploadCallback = () => {
    setSelectFileClick(true);
    onUpload();
  };
  return (
    <>
      <div
        onClick={() => setSelectFileClick(false)}
        style={{ display: selectFileClick ? "block" : "none" }}
      >
        <UploadButton
          accept="image/*,video/*"
          multiple={true}
          onChange={(e) => handleUpload(e)}
          label="Select a file"
        />
      </div>
      <div style={{ display: !selectFileClick ? "block" : "none" }}>
        <Button label="Cancel" onClick={onButtonClick} />
      </div>
      {showUploadButton && (
        <Button onClick={onUploadCallback} label={"Upload"} />
      )}
    </>
  );
};

export default UploadButtons;
