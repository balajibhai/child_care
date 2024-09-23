import React from "react";

interface UploadButtonsProps {
  // Define the type of handleUpload function
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "video"
  ) => void;
}

const UploadButtons = ({ handleUpload }: UploadButtonsProps) => {
  return (
    <div className="upload-buttons">
      <label>
        Upload Photo
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleUpload(e, "image")}
        />
      </label>
      <label>
        Upload Video
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={(e) => handleUpload(e, "video")}
        />
      </label>
    </div>
  );
};

export default UploadButtons;
