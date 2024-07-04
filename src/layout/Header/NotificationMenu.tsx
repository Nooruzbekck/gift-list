import React, { useState } from 'react';
import { Menu, MenuItem, Divider, styled } from '@mui/material';
import { Icons } from '../../assets';
import { NotificationMenuItem } from './NotificationMenuItem';
import { useToggleMenu } from '../../hooks/ToggleMenu';

interface Props {
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  anchorEl: Element | null;
  notifications: {
    id: string;
    imageUrl: string;
    message: string;
    userName: string;
    date: string;
  }[];
}

export const NotificationMenu: React.FC<Props> = ({
  open,
  notifications,
  anchorEl,
  onClose,
  onClick
}) => {
  const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);

  const { settings, setIsActiveMenu } = useToggleMenu();

  const handleSettings = (event: React.MouseEvent<SVGSVGElement>) => {
    setIsActiveMenu('notification', 'settings');
    setSettingsAnchorEl(event.currentTarget as unknown as HTMLElement);
  };

  const handleSettingsClose = () => {
    setSettingsAnchorEl(null);
    setIsActiveMenu('');
  };

  const handleSettingsMark = () => {
    handleSettingsClose();
  };

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
      <StyledFirstMenuItem>
        Уведомления <Icons.OptionIcon onClick={handleSettings} />
      </StyledFirstMenuItem>

      <Divider />

      {notifications?.map((item) => (
        <NotificationMenuItem onClose={onClose} key={item.id} {...item} />
      ))}

      <Menu
        anchorEl={settingsAnchorEl}
        open={settings === 'settings'}
        onClose={handleSettingsClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleSettingsMark}>Отметить все как прочитанные</MenuItem>
      </Menu>
    </MenuList>
  );
};

const MenuList = styled(Menu)(() => ({
  '.MuiList-root': {
    maxWidth: '417px'
  }
}));

const StyledFirstMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '18px',
  fontWeight: '500',
  padding: '15px 15px 11px 25px',

  svg: {
    transform: 'rotate(90deg)'
  }
}));
