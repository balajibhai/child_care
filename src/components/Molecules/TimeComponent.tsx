import Text from "../Atoms/Text";

const TimeComponent = ({ time }: { time: string }) => {
  return (
    <Text
      variant="subtitle1"
      content={time} //}
    />
  );
};

export default TimeComponent;

export function getTimeString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are zero-based, so add 1
  const day = now.getDate();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
