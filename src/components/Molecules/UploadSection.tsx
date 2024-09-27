// import CommentSection from "./CommentSection";
import UploadButtons from "./UploadButtons";

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
  filename: string;
}
interface UploadSectionProps {
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  handleCancel: () => void;
  previewList: MediaItem[];
  onClick: (type: string) => void;
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
