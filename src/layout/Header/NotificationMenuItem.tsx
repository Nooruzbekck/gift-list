import React from 'react';
import { MenuItem, styled } from '@mui/material';

interface Props {
  onClose: () => void;
  imageUrl: string;
  userName: string;
  message: string;
  date: string;
}

export const NotificationMenuItem: React.FC<Props> = ({
  onClose,
  imageUrl,
  userName,
  message,
  date
}) => {
  return (
    <StyledSecondMenuItem onClick={onClose}>
      <Wrapper>
        <img src={imageUrl} alt="" />
        <p>
          {userName}
          {message}
        </p>
      </Wrapper>
      <p>{date}</p>
    </StyledSecondMenuItem>
  );
};

const StyledSecondMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '16px'
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '12px',

  p: {
    width: '400px',
    gap: '10px',

    display: 'flex',
    flexWrap: 'wrap'
  },

  '& > img': {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
}));
