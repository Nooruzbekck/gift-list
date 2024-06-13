import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Icons } from '../assets';
import { styled } from '@mui/material';
import { SearchInput } from '../components/UI/input/SearchInput';
import { useState } from 'react';
import { Menu } from '../components/Menu';
import { ButtonIcon } from '../components/UI/IconButton';
import { useToggleMenu } from '../hooks/ToggleMenu';

const menus = [
  {
    id: 'e1',
    Icon: <Icons.UserIcon />,
    title: 'Профиль'
  },
  {
    id: 'e2',
    Icon: <Icons.Logout />,
    title: 'Выйти'
  }
];

export const Header = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { isActive, setIsActiveMenu } = useToggleMenu();

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsActiveMenu('profile');
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleMenuClick = () => {
    setIsActiveMenu('logout');
  };

  const handleNotification = () => {};

  const userName = 'Naruto Uzumaki';

  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <SearchInput
          value={searchValue}
          onChange={handleSearchChange}
          position="start"
          placeholder="Поиск"
        />
        <ContainerAction>
          <ButtonIcon onClick={handleNotification}>
            <Icons.Notification />
          </ButtonIcon>
          <ContainerProfileName>
            <ButtonIcon onClick={handleProfileMenuOpen}>
              <Icons.Profile />
            </ButtonIcon>
            <StyledTypographyName>
              {userName ? (
                <WrapperName>
                  <span>{userName}</span>
                  <ButtonIcon onClick={handleProfileMenuOpen}>
                    <Icons.UpArrowIcon />
                  </ButtonIcon>
                </WrapperName>
              ) : null}
              <Menu
                menus={menus}
                anchorEl={anchorEl}
                onClick={handleMenuClick}
                open={isActive == 'profile'}
                onClose={handleProfileMenuClose}
              />
            </StyledTypographyName>
          </ContainerProfileName>
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
  gap: '25px',
  padding: '0 45px 0 20px',
  '.MuiBox-root': {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  }
}));

const StyledTypographyName = styled('div')(() => ({
  color: 'black',
  whiteSpace: 'nowrap'
}));

const ContainerAction = styled(Box)(() => ({
  display: 'flex',
  gap: '20px',
  alignItems: 'center'
}));

const ContainerProfileName = styled('div')(() => ({
  display: 'flex',
  gap: '6px',
  alignItems: 'center'
}));

const WrapperName = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  span: {
    color: 'rgb(2, 2, 2)',
    fontWeight: '400',
    whiteSpace: 'nowrap'
  },
  svg: {
    cursor: 'pointer'
  }
}));
