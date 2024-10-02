import { MediaUploaderProps } from "../../types/ComponentTypes";
import Calendar from "../Atoms/Calendar";
import ShowUploaded from "./ShowUploaded";

export const PreviewMedia = (props: MediaUploaderProps) => {
  const { media, onMediaLoad, onMediaChange } = props;
  const dateChange = (uploadedDateTime: string | null) => {
    media.time = uploadedDateTime || "";
    onMediaChange(media);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ShowUploaded media={media} onLoad={onMediaLoad} />
      <Calendar onDateChange={dateChange} />
    </div>
  );
};
