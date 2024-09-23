interface ImageProps {
  src: string;
  alt: string;
  onLoad: () => void;
  onClick: () => void;
}

const Image = ({ src, alt, onLoad, onClick }: ImageProps) => {
  return (
    <div>
      <img src={src} alt="" onLoad={onLoad} onClick={onClick} />
    </div>
  );
};

export default Image;
