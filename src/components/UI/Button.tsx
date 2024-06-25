import React from 'react';
import { Button as MuiButton, styled } from '@mui/material';

interface PROPS {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  background?: string;
  variant?: 'contained' | 'outlined';
  disabled?: boolean;
}

const getButtonVariant = (variant: 'contained' | 'outlined', background: string) => {
  switch (variant) {
    case 'outlined':
      return {
        background: 'transparent',
        color: '#8D949E',
        border: '1px solid #8D949E',
        fontSize: '14px',
        fontWeight: '500',
        ':hover': {
          background: '#612386',
          color: '#FFFFFF',
          border: 'none'
        },
        ':active': {
          background: '#AB62D8',
          color: '#FFFFFF',
          border: 'none'
        },
        ':disabled': {
          border: '1px solid #1C1B1F1F',
          color: '#1C1B1F1F'
        }
      };
    case 'contained':
    default:
      return {
        background: background === 'red' ? '#FA2B56' : '#8639B5',
        color: 'white',
        fontSize: '16px',
        fontWeight: '600',
        ':hover': {
          background: background === 'red' ? '#DD0B37' : '#612386'
        },
        ':active': {
          background: background === 'red' ? '#ED6380' : '#AB62D8'
        },
        ':disabled': {
          background: '#1C1B1F1F',
          color: 'white'
        }
      };
  }
};

export const Button: React.FC<PROPS> = ({
  children,
  type,
  onClick,
  background = 'default',
  variant = 'contained',
  disabled
}) => {
  return (
    <StyleButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      background={background}
    >
      {children}
    </StyleButton>
  );
};

interface StyledButtonProps {
  background: string;
  variant: 'contained' | 'outlined';
}

const StyleButton = styled(MuiButton)<StyledButtonProps>(({ background, variant }) => ({
  ...getButtonVariant(variant, background),
  padding: '5px 15px',
  borderRadius: '6px',
  display: 'flex',
  gap: '10px'
}));
