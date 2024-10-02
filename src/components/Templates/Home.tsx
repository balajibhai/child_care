import { useRef, useState } from "react";
import UploadSection from "../Molecules/UploadSection";
import Header from "../Organisms/Header";
import UploadMedia from "../Organisms/UploadMedia";
import { MediaItem, MediaUploaderEnum } from "../../types/ComponentTypes";

const Home = () => {
  const [loadedMediaCount, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [mediaState, setMediaState] = useState<MediaUploaderEnum>(
    MediaUploaderEnum.SELECT
  );
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [previewList, setPreviewList] = useState<MediaItem[]>([]);

  const onMediaLoad = () => {
    const newCount = loadedMediaCount + 1;
    if (newCount === newMediaCount) {
      // All new media items have loaded
      if (mediaListRef.current) {
        mediaListRef.current.scrollTop = mediaListRef.current.scrollHeight;
      }
    }
    setLoadedMediaCount(newCount);
  };

  const getType = (fileType: string) => {
    if (fileType.startsWith("image/")) {
      return "image";
    } else if (fileType.startsWith("video/")) {
      return "video";
    }
  };

  const onPreview = (files: FileList | null) => {
    const uploadedFiles = Array.from(files || []);
    const newMedia = uploadedFiles.map((file) => {
      return {
        id: file.name,
        file: file,
        type: getType(file.type),
        filename: file.name, // Add filename property
      } as MediaItem;
    });
    setNewMediaCount(newMedia.length);
    setLoadedMediaCount(0);
    setPreviewList([...previewList, ...newMedia]);
    setMediaState(MediaUploaderEnum.SELECT);
  };

  const handleCancel = () => {
    setPreviewList([]);
  };

  const onUpload = () => {
    setMediaList([...mediaList, ...previewList]);
    setMediaState(MediaUploaderEnum.UPLOAD);
    setPreviewList([]);
  };

  return (
    <>
      <Header />
      <UploadMedia
        mediaListRef={mediaListRef}
        mediaList={
          mediaState === MediaUploaderEnum.UPLOAD ? mediaList : previewList
        }
        setMediaList={setMediaList}
        onMediaLoad={onMediaLoad}
        type={mediaState}
        showPreviewUpload={previewList.length > 0}
      />
      <UploadSection
        onPreview={onPreview}
        onUpload={onUpload}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Home;
