import { createContext } from "react";
import {
  ConfiguredValue,
  MediaItem,
  mediaType,
  MediaUploaderEnum,
  SettingsConfigType,
} from "./types/ComponentTypes";

interface ConfigContextType {
  onConfiguringSettings: (value: ConfiguredValue) => void;
}

interface UploadMediaContextType {
  mediaListRef: React.RefObject<HTMLDivElement>;
  setPreviewMediaList: (list: MediaItem[]) => void;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
}

interface MediaUploaderContextType {
  onMediaChange: (updatedMedia: MediaItem) => void;
  media: MediaItem;
}

interface HomePageContextType {
  settingsConfiguredValue: SettingsConfigType;
  setSettingsConfiguredValue: (paneConfig: SettingsConfigType) => void;
}

export const HomePageContext = createContext<HomePageContextType>({
  setSettingsConfiguredValue: () => {},
  settingsConfiguredValue: {
    PREVIEW: { fontSize: "", color: "" },
    MEDIA: { fontSize: "", color: "" },
    COMMENTS: { fontSize: "", color: "" },
  },
});

export const SettingsPopupContext = createContext<ConfigContextType>({
  onConfiguringSettings: () => {},
});

export const UploadMediaContext = createContext<UploadMediaContextType>({
  mediaListRef: { current: null },
  setPreviewMediaList: () => {},
  onMediaLoad: () => {},
  type: MediaUploaderEnum.SELECT,
});

export const MediaUploaderContext = createContext<MediaUploaderContextType>({
  onMediaChange: () => {},
  media: {
    id: "",
    file: {} as File,
    type: mediaType.VIDEO, // or a default type if necessary
    filename: "",
    time: "",
  },
});
