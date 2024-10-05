export interface MediaUploaderProps {
  media: MediaItem;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
  onMediaChange: (updatedMedia: MediaItem) => void;
  mediaView?: MediaView;
  settingsConfigValue: SettingsConfigType;
}

export enum mediaType {
  IMAGE = "image",
  VIDEO = "video",
}

export enum MediaUploaderEnum {
  SELECT = "SELECT",
  UPLOAD = "UPLOAD",
}

export interface MediaItem {
  id: string;
  file: File;
  type: mediaType;
  filename: string;
  time: string;
}

export enum MediaView {
  UPLOADED = "UPLOADED",
  PREVIEW = "PREVIEW",
}

export enum PaneType {
  PREVIEW = "PREVIEW",
  MEDIA = "MEDIA",
  COMMENTS = "COMMENTS",
}

export type configuredValue = {
  paneType: PaneType;
  selectedValue: string;
};

interface PaneConfig {
  fontSize: string;
  color: string;
}

export type SettingsConfigType = {
  PREVIEW: PaneConfig;
  MEDIA: PaneConfig;
  COMMENTS: PaneConfig;
};
