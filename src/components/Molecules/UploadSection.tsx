import UploadButtons from "./UploadButtons";

interface UploadSectionProps {
  onPreview: (files: FileList | null) => void;
  onUpload: (files: FileList | null) => void;
  handleCancel: () => void;
}

const UploadSection = ({
  onPreview,
  onUpload,
  handleCancel,
}: UploadSectionProps) => {
  return (
    <UploadButtons
      onFileSelect={onPreview}
      onUpload={onUpload}
      onCancel={handleCancel}
    />
  );
};

export default UploadSection;
