export interface MediaUploaderProps {
  media: MediaItem;
  type: MediaUploaderEnum;
  mediaView?: MediaView;
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
  type?: mediaType;
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

export type ConfiguredValue = {
  paneType: PaneType;
  selectedValue: string;
  selectedAttribute: keyof PaneConfig;
};

export type PaneConfig = {
  fontSize: string;
  color: string;
};

export type SettingsConfigType = {
  PREVIEW: PaneConfig;
  MEDIA: PaneConfig;
  COMMENTS: PaneConfig;
};

export enum DropdownAttribute {
  FONTSIZE = "fontSize",
  COLOR = "color",
}
