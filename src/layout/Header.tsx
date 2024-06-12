import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { Icons } from '../assets';
import { Input } from '../components/UI/input/Input';
import { styled } from '@mui/material';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <Input type="email" value="ddd" onChange={() => {}} placeholder="" />
        <ContainerAction>
          <IconButton onClick={handleProfileMenuOpen}>
            <Icons.Notification />
          </IconButton>
          <IconButton onClick={handleProfileMenuOpen}>
            <Icons.UserIcon />
          </IconButton>
        </ContainerAction>
      </StyledToolbar>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)(() => ({
  height: '86px',
  display: 'flex',
  justifyContent: 'center',
  background: '#FFFFFF'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 45px 0 20px'
}));

const ContainerAction = styled(Box)(() => ({
  display: 'flex',
  gap: '20px'
}));
