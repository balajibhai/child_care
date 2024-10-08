import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { PaneConfig, PaneType } from "../../types/ComponentTypes";
import { SettingsPopupContext } from "../../Context";

type DropdownProps = {
  label: string;
  paneType: PaneType;
  prevValue: string; // To set the dropdown to its previous value on opening
  valueList: (string | number)[];
  attribute: keyof PaneConfig;
};

/**
 *
 * Send the updated values to the SettingsPopupBody component
 *
 */

const DropDownValues = (valueList: (string | number)[]) => {
  return valueList.map((item) => <MenuItem value={item}>{`${item}`}</MenuItem>);
};

const Dropdown = (props: DropdownProps) => {
  const { label, paneType, prevValue, valueList, attribute } = props;
  const [value, setValue] = React.useState(prevValue);
  const { onConfiguring } = React.useContext(SettingsPopupContext);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    onConfiguring({
      paneType,
      selectedValue: event.target.value,
      selectedAttribute: attribute,
    });
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
          {DropDownValues(valueList)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
