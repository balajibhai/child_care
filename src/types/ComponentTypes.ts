export interface MediaUploaderProps {
  media: MediaItem;
  onMediaLoad: () => void;
  type: MediaUploaderEnum;
  onMediaChange: (updatedMedia: MediaItem) => void;
}

export enum mediaType {
  IMAGE = "image",
  VIDEO = "video",
}

export enum MediaUploaderEnum {
  SELECT = "SELECT",
  UPLOAD = "UPLOAD",
}

export interface MediaSizeProps {
  type: MediaUploaderEnum;
}

export interface MediaItem {
  id: string;
  file: File;
  type: mediaType;
  filename: string;
  time: string;
}
