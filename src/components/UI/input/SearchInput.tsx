import React, { ChangeEvent } from 'react';
import {
  TextField,
  MenuItem,
  Select,
  InputAdornment,
  styled,
  SelectChangeEvent
} from '@mui/material';
import { Icons } from '../../../assets';
import { REDUCER_ACTION } from '../../../utils/general/reducerFunc';

const UpArrowIconComponent: React.FC = () => <Icons.UpArrowIcon />;

interface Search {
  searchTerm?: string;
  states?: string;
  category?: string;
  subCategory?: string;
  country?: string;
}

interface Option {
  value: string;
  label: string;
}

interface Data {
  states: Option[];
  category: Option[];
  subCategory: Option[];
  country: Option[];
}

interface PARAMS {
  type: string;
  payload: any;
}

interface PROPS {
  data: Data;
  dispatch: (params: PARAMS) => void;
  search: Search;
}

export const SearchInput: React.FC<PROPS> = ({ data, dispatch, search }) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION.SEARCH, payload: event.target.value });
  };

  const handleStateChange = (event: SelectChangeEvent<unknown>) => {
    dispatch({ type: REDUCER_ACTION.STATES, payload: event.target.value });
  };

  const handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    dispatch({ type: REDUCER_ACTION.CATEGORY, payload: event.target.value });
  };

  const handleSubcategoryChange = (event: SelectChangeEvent<unknown>) => {
    dispatch({ type: REDUCER_ACTION.SUBCATEGORY, payload: event.target.value });
  };

  const handleCountryChange = (event: SelectChangeEvent<unknown>) => {
    dispatch({ type: REDUCER_ACTION.COUNTRY, payload: event.target.value });
  };

  return (
    <StyledInput
      fullWidth
      value={search.searchTerm}
      onChange={handleSearchChange}
      placeholder="Поиск"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icons.Search className="search_icon" />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end" sx={{ display: 'flex', gap: 1 }}>
            <StyledSelect
              className="selected"
              value={search.states}
              onChange={handleStateChange}
              IconComponent={UpArrowIconComponent}
            >
              {data.states?.map((option) => (
                <MenuItem key={option.value} value={option.value} className="selected">
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
            <StyledSelect
              value={search.category}
              className="selected"
              onChange={handleCategoryChange}
              displayEmpty
              IconComponent={UpArrowIconComponent}
            >
              {data.category?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
            <StyledSelect
              value={search.subCategory}
              className="selected"
              onChange={handleSubcategoryChange}
              displayEmpty
              IconComponent={UpArrowIconComponent}
            >
              {data.subCategory?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
            <StyledSelect
              value={search.country}
              className="selected"
              onChange={handleCountryChange}
              IconComponent={UpArrowIconComponent}
            >
              {data.country?.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledSelect>
          </InputAdornment>
        )
      }}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  height: '45px',
  border: '1px solid #BDBDBD',
  borderRadius: '10px',
  background: 'white',
  padding: '0 19px',
  display: 'flex',
  justifyContent: 'center',
  color: '#848181',
  '.search_icon': {
    cursor: 'pointer'
  },
  ':hover': {
    border: '1px solid #8639B5'
  },
  '.MuiInputBase-input': {
    fontSize: '16px',
    fontWeight: '400',
    position: 'relative'
  },
  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active':
    {
      WebkitTransition: 'color 9999s ease-out, background-color 9999s ease-out',
      WebkitTransitionDelay: '9999s'
    },
  '& fieldset': { border: 'none' },
  '& ::-webkit-input-placeholder': {
    color: '#FFFF'
  },
  "input[type='search']::-webkit-search-cancel-button": {
    display: 'none'
  }
}));

const StyledSelect = styled(Select)(() => ({
  svg: {
    height: '20px',
    width: '20px',
    transition: 'transform 0.2s ease-in-out'
  },
  '&.Mui-focused svg, &.Mui-active svg': {
    transform: 'rotate(180deg)'
  },
  ' .MuiOutlinedInput-input': {
    paddingRight: '16px'
  },
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
    {
      paddingRight: 4
    }
}));
