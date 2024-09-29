import { ImageType } from "../../types/MediaTypes";

const Image = ({ src, alt, onLoad, onClick }: ImageType) => {
  return (
    <>
      <img src={src} alt={alt} onLoad={onLoad} onClick={onClick} />
    </>
  );
};

export default Image;
