import React, { useRef, useState } from "react";

/**
 * 1) First there will be one select a file button
 * 2) On clicking it, user can select multiple media files from local
 * 3) If user doesn't select anything, keep select a file button as it is
 * 4) If user selects multiple media files, send the selected files to parent
 * 5) Then cancel will be displayed allowing user to cancel the selected files
 * 6) If cancel is cliked then go to step 1
 *
 * 7) If user selected files, then upload button should be displayed
 * 8) If upload is button is clicked, send the selected files to parent
 * 9) Then this component ceases to exist, parent should handle this
 *
 */

interface UploadButtonProps {
  onFileSelect: (files: FileList | null) => void;
  onUpload: (files: FileList | null) => void;
  onCancel: () => void;
}

const UploadButtons = (props: UploadButtonProps) => {
  const { onFileSelect, onUpload, onCancel } = props;
  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [areFilesSelected, setAreFilesSelected] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const selectAFileButtonClick = () => {
    inputFileRef.current?.click();
  };
  const fileSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    onFileSelect(files);
    if (files && files.length > 0) {
      setAreFilesSelected(true);
    }
  };
  const onCancelClick = () => {
    onCancel();
    setAreFilesSelected(false);
  };
  const onUploadClick = () => {
    onUpload(selectedFiles);
    setAreFilesSelected(false);
  };
  return (
    <div>
      <button onClick={selectAFileButtonClick}>Select a file</button>
      {areFilesSelected && <button onClick={onUploadClick}>Upload</button>}
      {areFilesSelected && <button onClick={onCancelClick}>Cancel</button>}
      <input
        style={{ display: "none" }}
        ref={inputFileRef}
        type="file"
        accept={"image/*,video/*"}
        multiple={true}
        onChange={fileSelectHandler}
      />
    </div>
  );
};

export default UploadButtons;
