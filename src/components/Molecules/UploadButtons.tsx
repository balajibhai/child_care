import React, { useState } from "react";
import UploadButton from "../Atoms/UploadButton";
import Button from "../Atoms/Button";

interface UploadButtonsProps {
  // Define the type of handleUpload function
  onPreview: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  showPreviewUpload: boolean;
  onUpload: () => void;
}

const UploadButtons = ({
  onPreview,
  handleCancel,
  onUpload,
  showPreviewUpload,
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
          onChange={(e) => onPreview(e)}
          label="Select a file"
        />
      </div>
      <div style={{ display: !selectFileClick ? "block" : "none" }}>
        <Button label="Cancel" onClick={onButtonClick} />
      </div>
      {showPreviewUpload && (
        <Button onClick={onUploadCallback} label={"Upload"} />
      )}
    </>
  );
};

export default UploadButtons;
