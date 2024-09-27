import { useRef, useState } from "react";
import UploadSection from "../Molecules/UploadSection";
import Header from "../Organisms/Header";
import UploadMedia from "../Organisms/UploadMedia";

interface fileProps {
  type: string;
}

interface MediaItem {
  id: string;
  file: File;
  type: "image" | "video";
  filename: string;
}

const Home = () => {
  const [, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [type, setType] = useState("");
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [previewList, setPreviewList] = useState<MediaItem[]>([]);

  const handleMediaLoad = () => {
    setLoadedMediaCount((prev) => {
      const newCount = prev + 1;
      if (newCount === newMediaCount) {
        // All new media items have loaded
        if (mediaListRef.current) {
          mediaListRef.current.scrollTop = mediaListRef.current.scrollHeight;
        }
      }
      return newCount;
    });
  };

  const getType = (file: fileProps) => {
    if (file.type.startsWith("image/")) {
      return "image";
    } else if (file.type.startsWith("video/")) {
      return "video";
    }
  };

  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const files = Array.from(event.target.files || []);
    const newMedia = files.map((file) => {
      return {
        id: URL.createObjectURL(file),
        file: file,
        type: getType(file),
        filename: file.name, // Add filename property
      } as MediaItem;
    });
    setNewMediaCount(newMedia.length);
    setLoadedMediaCount(0);
    setMediaList((prev) => [...prev, ...newMedia]);
    setPreviewList((prev) => [...prev, ...newMedia]);
    setType(type);
  };

  const handleCancel = () => {
    setPreviewList([]);
  };

  return (
    <>
      <Header />
      <UploadMedia
        mediaListRef={mediaListRef}
        mediaList={type === "upload" ? mediaList : previewList}
        handleMediaLoad={handleMediaLoad}
        type={type}
      />
      <UploadSection handleUpload={handleUpload} handleCancel={handleCancel} />
    </>
  );
};

export default Home;
