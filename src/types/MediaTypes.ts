import { MediaTypeEnum } from "../components/Molecules/MediaUploader";

export type MediaType = {
  id?: string;
  src: string;
  alt: string;
  onLoad: () => void;
  onClick: () => void;
  type: MediaTypeEnum;
};
export type ImageType = Omit<MediaType, "type"> & {};

export type VideoType = Omit<MediaType, "type" | "alt" | "onLoad"> & {
  onLoadedData?: () => void;
  controls?: boolean;
};
