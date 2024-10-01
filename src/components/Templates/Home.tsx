import { useEffect, useRef, useState } from "react";
import UploadSection from "../Molecules/UploadSection";
import Header from "../Organisms/Header";
import UploadMedia from "../Organisms/UploadMedia";
import Calendar from "../Atoms/Calendar";
import Time from "../Atoms/Time";
import { mediaType, MediaUploaderEnum } from "../Molecules/MediaUploader";

interface fileProps {
  type: string;
}

interface MediaItem {
  id: string;
  file: File;
  type: mediaType;
  filename: string;
}

const Home = () => {
  const [LoadedMediaCount, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [type, setType] = useState<MediaUploaderEnum>(MediaUploaderEnum.SELECT);
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [previewList, setPreviewList] = useState<MediaItem[]>([]);
  const [showPreviewUpload, setShowPreviewUpload] = useState(false);

  useEffect(() => {
    if (previewList.length > 0) {
      setShowPreviewUpload(true);
    } else {
      setShowPreviewUpload(false);
    }
  }, [previewList.length]);

  const onMediaLoad = () => {
    setLoadedMediaCount((LoadedMediaCount) => {
      const newCount = LoadedMediaCount + 1;
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

  const onPreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const newMedia = files.map((file) => {
      return {
        id: file.name,
        file: file,
        type: getType(file),
        filename: file.name, // Add filename property
      } as MediaItem;
    });
    setNewMediaCount(newMedia.length);
    setLoadedMediaCount(0);
    setPreviewList((prev) => [...prev, ...newMedia]);
    setType(MediaUploaderEnum.SELECT);
  };

  const handleCancel = () => {
    setPreviewList([]);
  };

  const onUpload = () => {
    setMediaList((mediaList) => [...mediaList, ...previewList]);
    setType(MediaUploaderEnum.UPLOAD);
    setPreviewList([]);
  };

  return (
    <>
      <Header />
      <UploadMedia
        mediaListRef={mediaListRef}
        mediaList={type === MediaUploaderEnum.UPLOAD ? mediaList : previewList}
        onMediaLoad={onMediaLoad}
        type={type}
        showPreviewUpload={showPreviewUpload}
      />
      <UploadSection
        onPreview={onPreview}
        handleCancel={handleCancel}
        showPreviewUpload={showPreviewUpload}
        onUpload={onUpload}
      />
      <Calendar />
      <Time />
    </>
  );
};

export default Home;
