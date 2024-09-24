import { Box, Drawer } from "@mui/material";
import Text from "../Atoms/Text";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose?: () => void;
}

const DrawerComponent = ({ isOpen, onClose }: DrawerComponentProps) => {
  return (
    <>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <Text variant="h6" sx={{ p: 2 }} content="Side Pane" />
          <Text sx={{ p: 2 }} content="Menu Item 1" />
          <Text sx={{ p: 2 }} content="Menu Item 2" />
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
