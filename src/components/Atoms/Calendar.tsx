import { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newDate: Dayjs) => {
    setSelectedDate(newDate);
    const formattedDate = newDate ? newDate.format("YYYY-MM-DD") : "";
    console.log("Formatted date:", formattedDate);
    // You can use formattedDate as needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar value={selectedDate} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default Calendar;
