import { mediaType } from "./ComponentTypes";

export type MediaType = {
  id?: string;
  src: string;
  alt: string;
  onClick: () => void;
  type: mediaType;
  onLoad?: () => void;
};
export type ImageType = Omit<MediaType, "type"> & {};

export type VideoType = Omit<MediaType, "type" | "alt" | "onLoad"> & {
  onLoadedData?: () => void;
  controls?: boolean;
};
