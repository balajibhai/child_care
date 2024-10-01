import UploadButtons from "./UploadButtons";

interface UploadSectionProps {
  onPreview: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  showPreviewUpload: boolean;
  onUpload: () => void;
}

const UploadSection = ({
  onPreview,
  handleCancel,
  onUpload,
  showPreviewUpload,
}: UploadSectionProps) => {
  return (
    <>
      <UploadButtons
        onPreview={onPreview}
        handleCancel={handleCancel}
        showPreviewUpload={showPreviewUpload}
        onUpload={onUpload}
      />
    </>
  );
};

export default UploadSection;
