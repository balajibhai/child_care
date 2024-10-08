import { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export type CalendarProps = {
  onDateChange: (date: string | null) => void;
};
const Calendar = (props: CalendarProps) => {
  const { onDateChange } = props;
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
    if (newDate != null) {
      const formattedDate = newDate
        ? newDate.format("YYYY-MM-DDTHH:mm:ss")
        : "";
      onDateChange(formattedDate);
    } else {
      onDateChange(null);
    }

    // You can use formattedDate as needed
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </LocalizationProvider>
  );
};

export default Calendar;
