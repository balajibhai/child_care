export interface MediaUploaderProps {
  media: MediaItem;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
  onMediaChange: (updatedMedia: MediaItem) => void;
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
  type: mediaType;
  filename: string;
  time: string;
}

export enum MediaView {
  UPLOADED = "UPLOADED",
  PREVIEW = "PREVIEW",
}
