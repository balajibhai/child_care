import React, { useState } from "react";
import UploadButton from "../Atoms/UploadButton";
import Button from "../Atoms/Button";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
  filename: string;
}

interface UploadButtonsProps {
  // Define the type of handleUpload function
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  handleCancel: () => void;
  previewList: MediaItem[];
  onClick: (type: string) => void;
}

const UploadButtons = ({
  handleUpload,
  handleCancel,
  previewList,
  onClick,
}: UploadButtonsProps) => {
  const [selectFileClick, setSelectFileClick] = useState(true);
  const onButtonClick = () => {
    setSelectFileClick(true);
    handleCancel();
  };
  const onUpload = () => {
    setSelectFileClick(true);
    onClick("upload");
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
          onChange={(e) => handleUpload(e, "select")}
          label="Select a file"
        />
      </div>
      <div style={{ display: !selectFileClick ? "block" : "none" }}>
        <Button disabled={false} label="Cancel" onClick={onButtonClick} />
      </div>
      {previewList.length > 0 && (
        <Button onClick={onUpload} label={"Upload"} disabled={false} />
      )}
    </>
  );
};

export default UploadButtons;
