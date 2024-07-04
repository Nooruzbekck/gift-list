import React, { useCallback } from 'react';
import { IconButton, OutlinedInput, InputAdornment, styled } from '@mui/material';
import { Icons } from '../../../assets';

interface PROPS {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  position: 'start' | 'end';
}

export const SearchInput: React.FC<PROPS> = ({
  value,
  onChange,
  placeholder,
  position = 'start'
}) => {
  const getStatusPosition = useCallback((position: 'start' | 'end') => {
    const startAdornment = (
      <InputAdornment position="start">
        <IconButton aria-label="toggle search visibility" edge="start">
          <Icons.Search />
        </IconButton>
      </InputAdornment>
    );

    const endAdornment = (
      <InputAdornment position="end">
        <IconButton aria-label="toggle search visibility" edge="end">
          <Icons.Search />
        </IconButton>
      </InputAdornment>
    );

    return position === 'start' ? startAdornment : endAdornment;
  }, []);

  return (
    <StyledOutlinedInput
      fullWidth
      type="search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      startAdornment={position === 'start' ? getStatusPosition('start') : null}
      endAdornment={position === 'end' ? getStatusPosition('end') : null}
    />
  );
};

const StyledOutlinedInput = styled(OutlinedInput)(() => ({
  fontSize: '16px',
  fontWeight: '400',
  height: '40px',
  borderRadius: '8px',
  padding: '0 19px',
  color: '#8D949E',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#BDBDBD'
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8639B5'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#BDBDBD'
  }
}));
