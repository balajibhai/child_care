import React, { useState } from "react";
import UploadButton from "../Atoms/UploadButton";
import Button from "../Atoms/Button";

interface UploadButtonsProps {
  // Define the type of handleUpload function
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  handleCancel: () => void;
}

const UploadButtons = ({ handleUpload, handleCancel }: UploadButtonsProps) => {
  const [selectFileClick, setSelectFileClick] = useState(true);
  const onButtonClick = () => {
    setSelectFileClick(true);
    handleCancel();
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
      {/* <UploadButton
        accept="video/*"
        multiple={true}
        onChange={(e) => handleUpload(e, "video")}
        label="Upload Video"
      /> */}
    </>
  );
};

export default UploadButtons;
