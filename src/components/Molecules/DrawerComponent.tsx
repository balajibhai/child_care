import { Box, Drawer } from "@mui/material";
import Text from "../Text";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose?: () => void;
}

const DrawerComponent = ({ isOpen, onClose }: DrawerComponentProps) => {
  return (
    <div>
      <Drawer anchor="left" open={isOpen} onClose={onClose}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={onClose}
          onKeyDown={onClose}
        >
          <Text
            variant="h6"
            sx={{ p: 2 }}
            content="Side Pane"
            component="Typography"
          />
          <Text sx={{ p: 2 }} content="Menu Item 1" component="Typography" />
          <Text sx={{ p: 2 }} content="Menu Item 2" component="Typography" />
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
