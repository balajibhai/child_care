// import CommentSection from "./CommentSection";
import Button from "../Atoms/Button";
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
  onClick: () => void;
}

const UploadSection = ({
  handleUpload,
  handleCancel,
  previewList,
  onClick,
}: UploadSectionProps) => {
  return (
    <>
      <UploadButtons handleUpload={handleUpload} handleCancel={handleCancel} />
      {previewList.length && (
        <Button onClick={onClick} label={"Upload"} disabled={false} />
      )}
      {/* <CommentSection
        mediaId="post"
        placeholder="What's in your mind?"
        buttonLabel="Post"
      /> */}
    </>
  );
};

export default UploadSection;
