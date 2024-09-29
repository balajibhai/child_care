// import CommentSection from "./CommentSection";
import { MediaTypeEnum, MediaUploaderType } from "./MediaUploader";
import UploadButtons from "./UploadButtons";

interface MediaItem {
  id: string;
  file: File;
  type: MediaTypeEnum;
  filename: string;
}
interface UploadSectionProps {
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: MediaUploaderType.SELECT
  ) => void;
  handleCancel: () => void;
  previewList: MediaItem[];
  onClick: (type: MediaUploaderType.UPLOAD) => void;
}

const UploadSection = ({
  handleUpload,
  handleCancel,
  previewList,
  onClick,
}: UploadSectionProps) => {
  return (
    <>
      <UploadButtons
        handleUpload={handleUpload}
        handleCancel={handleCancel}
        previewList={previewList}
        onClick={onClick}
      />
      {/* <CommentSection
        mediaId="post"
        placeholder="What's in your mind?"
        buttonLabel="Post"
      /> */}
    </>
  );
};

export default UploadSection;
