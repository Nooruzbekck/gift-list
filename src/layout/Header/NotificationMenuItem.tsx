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

        <ContainerMessage>
          <Message>
            <span>{userName}</span> {message}
          </Message>

          <Date>{date}</Date>
        </ContainerMessage>
      </Wrapper>
    </StyledSecondMenuItem>
  );
};

const StyledSecondMenuItem = styled(MenuItem)(() => ({
  display: 'flex',
  alignContent: 'space-between',
  gap: '10px',
  marginTop: '16px'
}));

const ContainerMessage = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '#3772FF'
  }
}));

const Message = styled('p')(() => ({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'normal'
}));

const Date = styled('p')(() => ({
  margin: '0'
}));

const Wrapper = styled('div')(() => ({
  display: 'flex',
  gap: '12px',

  '& > img': {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    objectFit: 'cover'
  }
}));
