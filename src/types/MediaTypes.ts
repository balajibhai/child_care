import { mediaType } from "../components/Molecules/MediaUploader";

export type MediaType = {
  id?: string;
  src: string;
  alt: string;
  onLoad: () => void;
  onClick: () => void;
  type: mediaType;
};
export type ImageType = Omit<MediaType, "type"> & {};

export type VideoType = Omit<MediaType, "type" | "alt" | "onLoad"> & {
  onLoadedData?: () => void;
  controls?: boolean;
};
