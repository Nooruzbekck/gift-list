import React from 'react';
import { Menu as MuiMenu, MenuItem, styled } from '@mui/material';

interface MenuProps {
  menus: { id: string; Icon: JSX.Element; title: string }[];
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  anchorEl: Element | null;
}

export const Menu: React.FC<MenuProps> = ({ menus, anchorEl, open, onClose, onClick }) => {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      {menus.map((menu) => (
        <StyledMenuItem key={menu.id} onClick={onClick}>
          {menu.Icon ? menu.Icon : null}
          <p>{menu.title}</p>
        </StyledMenuItem>
      ))}
    </MuiMenu>
  );
};

const StyledMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  textAlign: 'left',
  gap: '10px'
}));
