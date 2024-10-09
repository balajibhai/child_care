import { useContext } from "react";
import { ImageType } from "../../types/MediaTypes";
import { UploadMediaContext } from "../../Context";

const Image = ({ src, alt, onClick }: ImageType) => {
  const { onMediaLoad } = useContext(UploadMediaContext);

  return (
    <>
      <img src={src} alt={alt} onLoad={onMediaLoad} onClick={onClick} />
    </>
  );
};

export default Image;
