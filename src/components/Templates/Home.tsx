import { useRef, useState } from "react";
import UploadSection from "../Molecules/UploadSection";
import Header from "../Organisms/Header";
import UploadMedia from "../Organisms/UploadMedia";
import Calendar from "../Atoms/Calendar";
import Time from "../Atoms/Time";
import { MediaTypeEnum, MediaUploaderType } from "../Molecules/MediaUploader";

interface fileProps {
  type: string;
}

interface MediaItem {
  id: string;
  file: File;
  type: MediaTypeEnum;
  filename: string;
}

const Home = () => {
  const [, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [type, setType] = useState<MediaUploaderType>(MediaUploaderType.SELECT);
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

  const handlePreviewUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: MediaUploaderType
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
    setPreviewList((prev) => [...prev, ...newMedia]);
    setType(type);
  };

  const handleCancel = () => {
    setPreviewList([]);
  };

  const onUpload = (type: MediaUploaderType) => {
    setMediaList((prev) => [...prev, ...previewList]);
    setType(type);
    setPreviewList([]);
  };

  return (
    <>
      <Header />
      <UploadMedia
        mediaListRef={mediaListRef}
        mediaList={type === MediaUploaderType.UPLOAD ? mediaList : previewList}
        handleMediaLoad={handleMediaLoad}
        type={type}
      />
      <UploadSection
        handleUpload={handlePreviewUpload}
        handleCancel={handleCancel}
        previewList={previewList}
        onClick={onUpload}
      />
      <Calendar />
      <Time />
    </>
  );
};

export default Home;
