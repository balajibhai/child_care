// import CommentSection from "./CommentSection";
import UploadButtons from "./UploadButtons";

interface UploadSectionProps {
  handleUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => void;
  handleCancel: () => void;
}

const UploadSection = ({ handleUpload, handleCancel }: UploadSectionProps) => {
  return (
    <>
      <UploadButtons handleUpload={handleUpload} handleCancel={handleCancel} />
      {/* <CommentSection
        mediaId="post"
        placeholder="What's in your mind?"
        buttonLabel="Post"
      /> */}
    </>
  );
};

export default UploadSection;
