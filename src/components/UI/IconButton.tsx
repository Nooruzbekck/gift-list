import React from 'react';
import { IconButton } from '@mui/material';

interface Props {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const ButtonIcon: React.FC<Props> = ({ onClick, children, ...rest }) => {
  return (
    <IconButton onClick={onClick} {...rest}>
      {children}
    </IconButton>
  );
};
