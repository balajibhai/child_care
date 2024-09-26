import CommentSection from "./CommentSection";
import UploadButtons from "./UploadButtons";

interface UploadSectionProps {
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "image" | "video"
  ) => void;
}

const UploadSection = ({ handleUpload }: UploadSectionProps) => {
  return (
    <>
      <UploadButtons handleUpload={handleUpload} />
      <CommentSection
        mediaId="post"
        placeholder="What's in your mind?"
        buttonLabel="Post"
      />
    </>
  );
};

export default UploadSection;
