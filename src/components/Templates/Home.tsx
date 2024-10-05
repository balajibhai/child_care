import { useRef, useState } from "react";
import UploadSection from "../Molecules/UploadSection";
import Header from "../Organisms/Header";
import UploadMedia from "../Organisms/UploadMedia";
import {
  MediaItem,
  MediaUploaderEnum,
  SettingsConfigType,
} from "../../types/ComponentTypes";

/**
 *
 * 1) Preview section should always be displayed even when upload is clicked
 * 2) When upload is clicked, preview should be a separate section
 * 3) We need two different boxes, one for preview and the other for media uploader *
 * 4) So pass medialist for mediauploader and previewlist for preview as props
 *  Then, media section should be displayed separately and should never be hidden from there onwards
 *
 */

const Home = () => {
  const [loadedMediaCount, setLoadedMediaCount] = useState(0);
  const [newMediaCount, setNewMediaCount] = useState(0);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [mediaState, setMediaState] = useState<MediaUploaderEnum>(
    MediaUploaderEnum.SELECT
  );
  const mediaListRef = useRef<HTMLDivElement>(null);
  const [previewMediaList, setPreviewMediaList] = useState<MediaItem[]>([]);
  const [settingsConfigValue, setSettingsConfigValue] =
    useState<SettingsConfigType>({
      PREVIEW: { fontSize: "" },
      MEDIA: { fontSize: "" },
      COMMENTS: { fontSize: "" },
    });

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
    setPreviewMediaList([...previewMediaList, ...newMedia]);
    setMediaState(MediaUploaderEnum.SELECT);
  };

  const handleCancel = () => {
    setPreviewMediaList([]);
  };

  const onUpload = () => {
    setMediaList([...mediaList, ...previewMediaList]);
    setMediaState(MediaUploaderEnum.UPLOAD);
    setPreviewMediaList([]);
  };

  const settingsConfig = (paneConfig: SettingsConfigType) => {
    setSettingsConfigValue(paneConfig);
  };

  return (
    <>
      <Header
        settingsConfig={settingsConfig}
        settingsConfigValue={settingsConfigValue}
      />
      <UploadMedia
        mediaListRef={mediaListRef}
        mediaList={mediaList}
        previewMediaList={previewMediaList}
        setPreviewMediaList={setPreviewMediaList}
        onMediaLoad={onMediaLoad}
        type={mediaState}
        settingsConfigValue={settingsConfigValue}
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
