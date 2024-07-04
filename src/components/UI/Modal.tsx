import { Box, Modal as MuiModal, styled } from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactElement;
}

export const Modal: React.FC<Props> = ({ open, onClose, children, ...rest }) => {
  return (
    <MuiModal open={open} onClose={onClose} {...rest}>
      <StyledBox>{children}</StyledBox>
    </MuiModal>
  );
};

const StyledBox = styled(Box)(() => ({
  maxWidth: '600px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '24px  32px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#ffffff',
  color: '#222',
  borderRadius: '4px',
  outline: 'none'
}));
