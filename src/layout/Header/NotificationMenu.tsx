import React from 'react';
import { Menu, MenuItem, Divider, styled } from '@mui/material';
import { Icons } from '../../assets';
import { NotificationMenuItem } from './NotificationMenuItem';

interface Props {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  anchorEl: Element | null;
  notifications: { id: string; imageUrl: string; message: string; userName: string }[];
}

export const NotificationMenu: React.FC<Props> = ({
  open,
  notifications,
  anchorEl,
  onClose,
  onClick
}) => {
  return (
    <MenuList
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      onClick={onClick}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <StyledFristMenuItem onClick={onClose}>
        Уведомления <Icons.OptionIcon />
      </StyledFristMenuItem>
      <Divider />
      {notifications.map((item) => (
        <NotificationMenuItem onClose={() => {}} key={item.id} {...item} />
      ))}
    </MenuList>
  );
};

const MenuList = styled(Menu)(() => ({
  '.MuiList-root': {
    maxWidth: '417px'
  }
}));

const StyledFristMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '18px',
  fontWeight: '500',
  padding: '15px 15px 11px 25px',
  svg: {
    transform: 'rotate(90deg)'
  }
}));
