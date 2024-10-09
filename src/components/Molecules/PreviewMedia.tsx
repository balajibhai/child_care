import { useContext } from "react";
import { MediaUploaderContext } from "../../Context";
import { MediaUploaderProps } from "../../types/ComponentTypes";
import Calendar from "../Atoms/Calendar";
import ShowUploaded from "./ShowUploaded";

export const PreviewMedia = (props: MediaUploaderProps) => {
  const { media } = props;
  const { onMediaChange } = useContext(MediaUploaderContext);
  const dateChange = (uploadedDateTime: string | null) => {
    media.time = uploadedDateTime || "";
    onMediaChange(media);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <ShowUploaded media={media} />
      <Calendar onDateChange={dateChange} />
    </div>
  );
};
