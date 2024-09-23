interface ImageProps {
  id: string;
  src: string;
  onLoadedData: () => void;
  onClick: () => void;
}

const Video = ({ id, src, onLoadedData, onClick }: ImageProps) => {
  return (
    <div>
      <video
        id={id}
        src={src}
        controls
        onLoadedData={onLoadedData}
        onClick={onClick}
      />
    </div>
  );
};

export default Video;
