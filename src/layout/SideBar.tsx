import * as React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from '@mui/material';
import { sidebar } from '../utils/constants/side-bar';

interface Props {
  window?: () => Window;
  drawerWidth: number;
}

export const SideBar = (props: Props) => {
  const { window, drawerWidth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {};

  const drawer = (
    <div>
      <List>
        {sidebar.map(({ title, Icon, id }) => (
          <ListItem key={id} disablePadding>
            <StyledListItemButton>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <StyledListItemText primary={title} />
            </StyledListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <Container component="nav">
          <Drawer
            container={container}
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
          >
            {drawer}
          </Drawer>
          <DrawerContainer variant="permanent" drawerWidth={drawerWidth}>
            <DrawerHeader>Gift list</DrawerHeader>
            {drawer}
          </DrawerContainer>
        </Container>
      </Box>
    </>
  );
};

interface StyledDrawerProps {
  drawerWidth: number;
}

const Container = styled(Box)(() => ({
  '.MuiDrawer-paper': {
    height: '100vh',
    background: 'linear-gradient(180.00deg, rgb(134, 57, 181),rgb(9, 32, 86) 100%)'
  }
}));

const DrawerContainer = styled(Drawer)<StyledDrawerProps>(({ drawerWidth }) => ({
  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, padding: '20px' }
}));

const StyledListItemButton = styled(ListItemButton)(() => ({
  width: '254px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:active': {
    background: 'rgba(255, 255, 255, 1)'
  },
  '&:focus': {
    background: '#FFFFFF',
    opacity: '10%',
    borderRadius: '8px'
  }
}));

const StyledListItemText = styled(ListItemText)(() => ({
  fontSize: '16px',
  fontWeight: '500',
  color: '#FFF',
  opacity: '10px',
  zIndex: '99'
}));

const DrawerHeader = styled('h1')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  fontSize: '24px',
  fontWeight: '700',
  color: '#FFF',
  textTransform: 'uppercase',
  minHeight: '66px'
}));
