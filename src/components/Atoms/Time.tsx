import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const Time: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);

  const handleTimeChange = (newTime: Dayjs | null) => {
    setSelectedTime(newTime);

    // Format the time if it's not null
    const formattedTime = newTime ? newTime.format("HH:mm") : "";

    // You can perform additional actions with formattedTime here
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Basic time picker"
        value={selectedTime}
        onChange={handleTimeChange}
      />
    </LocalizationProvider>
  );
};

export default Time;
