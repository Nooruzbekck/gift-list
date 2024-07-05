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

export const SideBar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const focusedItemRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    const lastFocusedItem = sessionStorage.getItem('lastFocusedItem');
    if (lastFocusedItem) {
      focusedItemRef.current = lastFocusedItem;
    }
  }, []);

  React.useEffect(() => {
    if (focusedItemRef.current) {
      const element = document.getElementById(focusedItemRef.current);
      if (element) {
        element.focus();
      }
    }
  }, [mobileOpen]);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {};

  const handleFocus = (id: string) => {
    sessionStorage.setItem('lastFocusedItem', id);
  };

  const drawer = (
    <div>
      <List>
        {sidebar.map(({ title, Icon, id }) => (
          <ListItem key={id} disablePadding>
            <StyledListItemButton id={id} onFocus={() => handleFocus(id)}>
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

  return (
    <>
      <Box>
        <Container component="nav">
          <Drawer
            open={mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
            onClose={handleDrawerClose}
          >
            {drawer}
          </Drawer>
          <DrawerContainer variant="permanent">
            <DrawerHeader>Gift list</DrawerHeader>
            {drawer}
          </DrawerContainer>
        </Container>
      </Box>
    </>
  );
};

const Container = styled(Box)(() => ({
  '.MuiDrawer-paper': {
    height: '100vh',
    background: 'linear-gradient(180.00deg, rgb(134, 57, 181),rgb(9, 32, 86) 100%)'
  }
}));

const DrawerContainer = styled(Drawer)(() => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '294px',
    padding: '20px'
  }
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
    background: '#ffffff27',
    borderRadius: '8px',
    color: 'red'
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
