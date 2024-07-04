import { useState, MouseEvent } from 'react';
import { styled, AppBar, Box, Toolbar } from '@mui/material';
import { useToggleMenu } from '../../hooks/ToggleMenu';
import { Menu } from '../../components/Menu';
import { SearchInput } from '../../components/UI/input/SearchInput';
import { ButtonIcon } from '../../components/UI/IconButton';
import { Modal } from '../../components/UI/Modal';
import { Button } from '../../components/UI/Button';
import { Icons } from '../../assets';
import { NotificationMenu } from './NotificationMenu';
import { notification } from '../../utils/constants';

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
  const [notificationAnchorEl, setNotificationAnchorEl] = useState<null | HTMLElement>(null);
  const { isActive, setIsActiveMenu } = useToggleMenu();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const handleProfileMenuOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleNotification = (event: MouseEvent<HTMLButtonElement>) => {
    setNotificationAnchorEl(event.currentTarget);
    setIsActiveMenu('notification');
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = () => {
    setIsActiveMenu('profile-logout');
  };

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

          <NotificationMenu
            notifications={notification}
            anchorEl={notificationAnchorEl}
            open={isActive === 'notification'}
            onClick={() => {}}
            onClose={() => setIsActiveMenu('')}
          />

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
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              />
            </StyledTypographyName>
          </ContainerProfileName>
        </ContainerAction>
      </StyledToolbar>

      <Modal open={isActive === 'profile-logout'} onClose={() => setIsActiveMenu('')}>
        <WrapperModal>
          <StyledLogout>
            <Icons.Logout />
          </StyledLogout>

          <Description>Вы уверены что хотите выйти?</Description>

          <ContainerActions>
            <Button type="button" variant="outlined" onClick={() => setIsActiveMenu('')}>
              Отмена
            </Button>

            <Button
              onClick={() => {
                console.log('render');
              }}
              type="submit"
            >
              Выйти
            </Button>
          </ContainerActions>
        </WrapperModal>
      </Modal>
    </StyledHeader>
  );
};

const StyledHeader = styled(AppBar)(() => ({
  height: '86px',
  background: '#FFFFFF',

  display: 'flex',
  justifyContent: 'center'
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

const WrapperModal = styled('section')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px'
}));

const StyledLogout = styled('div')(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: '#DFDFE6',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '33px',
    height: '35px',
    paddingRight: '6px'
  }
}));

const Description = styled('p')(() => ({
  marginBottom: '16px',
  fontSize: '24px',
  fontWeight: '500'
}));

const ContainerActions = styled('div')(() => ({
  display: 'flex',
  gap: '16px',

  button: {
    fontSize: '14px',
    fontWeight: '500'
  },

  '& button:last-child': {
    background: '#E53535',
    color: 'white'
  }
}));
