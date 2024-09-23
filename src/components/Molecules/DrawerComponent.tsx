import { Box, Drawer } from "@mui/material";
import Text from "../Text";

interface DrawerComponentProps {
  isDrawerOpen: boolean;
  toggleDrawer?: (
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void | undefined;
}

const DrawerComponent = ({
  isDrawerOpen,
  toggleDrawer,
}: DrawerComponentProps) => {
  const toggleFunc = toggleDrawer && toggleDrawer(!isDrawerOpen);

  return (
    <div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleFunc}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleFunc}
          onKeyDown={toggleFunc}
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
