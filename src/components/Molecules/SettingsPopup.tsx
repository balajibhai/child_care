import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  ConfiguredValue,
  SettingsConfigType,
} from "../../types/ComponentTypes";
import { SettingsPopupContext } from "../../Context";
import SettingsPopupBody from "./SettingsPopupBody";

type SettingsPopupProps = {
  isPopupOpen: boolean;
  onPopupSubmit: (paneConfig: SettingsConfigType) => void;
};

/**
 *
 * 1) Popup section body component is called and apply button is kept in this component
 * 2) Get the configured values from the child and set them in the state to pass them to the parent
 *
 */

const SettingsPopup = (props: SettingsPopupProps) => {
  const { isPopupOpen, onPopupSubmit } = props;
  const [open, setOpen] = React.useState(isPopupOpen);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [paneConfig, setPaneConfig] = React.useState<SettingsConfigType>({
    PREVIEW: { fontSize: "", color: "" },
    MEDIA: { fontSize: "", color: "" },
    COMMENTS: { fontSize: "", color: "" },
  });

  // Update open state whenever popupState changes
  React.useEffect(() => {
    setOpen(isPopupOpen);
  }, [isPopupOpen]);

  const onConfiguring = (value: ConfiguredValue) => {
    const panetype = value.paneType;
    const style = value.selectedValue;
    const selectedAttribute = value.selectedAttribute;
    setPaneConfig({
      ...paneConfig,
      [panetype]: { ...paneConfig[panetype], [selectedAttribute]: style },
    });
  };

  const onApply = () => {
    onPopupSubmit(paneConfig);
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onApply}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Sections</DialogTitle>
        <DialogContent>
          <SettingsPopupContext.Provider value={{ onConfiguring }}>
            <SettingsPopupBody />
          </SettingsPopupContext.Provider>
        </DialogContent>
        <DialogActions>
          <Button onClick={onApply} autoFocus>
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SettingsPopup;
