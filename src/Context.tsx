import { createContext } from "react";
import {
  ConfiguredValue,
  MediaItem,
  MediaUploaderEnum,
  SettingsConfigType,
} from "./types/ComponentTypes";

interface ConfigContextType {
  onConfiguring: (value: ConfiguredValue) => void;
}

interface UploadMediaContextType {
  mediaListRef: React.RefObject<HTMLDivElement>;
  setPreviewMediaList: (list: MediaItem[]) => void;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
  settingsConfigValue: SettingsConfigType;
}

interface MediaUploaderContextType {
  onMediaChange: (updatedMedia: MediaItem) => void;
}

export const HeaderContext = createContext<SettingsConfigType>({
  PREVIEW: { fontSize: "", color: "" },
  MEDIA: { fontSize: "", color: "" },
  COMMENTS: { fontSize: "", color: "" },
});

export const SettingsPopupContext = createContext<ConfigContextType>({
  onConfiguring: () => {},
});

export const UploadMediaContext = createContext<UploadMediaContextType>({
  mediaListRef: { current: null },
  setPreviewMediaList: () => {},
  onMediaLoad: () => {},
  type: MediaUploaderEnum.SELECT,
  settingsConfigValue: {
    PREVIEW: { fontSize: "", color: "" },
    MEDIA: { fontSize: "", color: "" },
    COMMENTS: { fontSize: "", color: "" },
  },
});

export const MediaUploaderContext = createContext<MediaUploaderContextType>({
  onMediaChange: () => {},
});
