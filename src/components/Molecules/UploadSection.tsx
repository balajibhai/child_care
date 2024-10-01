import UploadButtons from "./UploadButtons";

interface UploadSectionProps {
  handleUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  showUploadButton: boolean;
  onUpload: () => void;
}

const UploadSection = ({
  handleUpload,
  handleCancel,
  onUpload,
  showUploadButton,
}: UploadSectionProps) => {
  return (
    <>
      <UploadButtons
        handleUpload={handleUpload}
        handleCancel={handleCancel}
        showUploadButton={showUploadButton}
        onUpload={onUpload}
      />
    </>
  );
};

export default UploadSection;
