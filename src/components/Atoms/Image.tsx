import { useContext } from "react";
import { ImageType } from "../../types/MediaTypes";
import { UploadMediaContext } from "../../Context";

const Image = ({ src, alt, onClick, onLoad }: ImageType) => {
  return (
    <>
      <img src={src} alt={alt} onLoad={onLoad} onClick={onClick} />
    </>
  );
};

export default Image;
