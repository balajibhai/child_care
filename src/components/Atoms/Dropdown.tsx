import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { configuredValue, PaneType } from "../../types/ComponentTypes";

type DropdownProps = {
  label: string;
  paneType: PaneType;
  onConfiguring: (value: configuredValue) => void;
  prevValue: string; // To set the dropdown to its previous value on opening
};

/**
 *
 * Send the updated values to the SettingsPopupBody component
 *
 */

const Dropdown = (props: DropdownProps) => {
  const { label, paneType, onConfiguring, prevValue } = props;
  const [value, setValue] = React.useState(prevValue);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onConfiguring({ paneType, fontSize: `${String(event.target.value)}px` }); // Concatenating with "px" so that it will be easy to use directly in styling components
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="fontsize"
          onChange={handleChange}
        >
          <MenuItem value={10}>10px</MenuItem>
          <MenuItem value={20}>20px</MenuItem>
          <MenuItem value={30}>30px</MenuItem>
          <MenuItem value={40}>40px</MenuItem>
          <MenuItem value={50}>50px</MenuItem>
          <MenuItem value={60}>60px</MenuItem>
          <MenuItem value={70}>70px</MenuItem>
          <MenuItem value={80}>80px</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
