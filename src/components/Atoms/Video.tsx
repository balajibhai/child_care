interface ImageProps {
  id: string;
  src: string;
  onLoadedData: () => void;
  onClick: () => void;
  controls: boolean;
}

const Video = ({ id, src, onLoadedData, onClick, controls }: ImageProps) => {
  return (
    <>
      <video
        id={id}
        src={src}
        controls={controls}
        onLoadedData={onLoadedData}
        onClick={onClick}
      />
    </>
  );
};

export default Video;
