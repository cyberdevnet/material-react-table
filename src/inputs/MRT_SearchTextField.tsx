import React, { ChangeEvent, FC, useState } from 'react';
import { Collapse, IconButton, InputAdornment, TextField } from '@mui/material';
import { useMRT } from '../useMRT';
import { useAsyncDebounce } from 'react-table';

interface Props {}

export const MRT_SearchTextField: FC<Props> = () => {
  const {
    icons: { SearchIcon, CloseIcon },
    idPrefix,
    localization,
    muiSearchTextFieldProps,
    onGlobalFilterChange,
    tableInstance,
  } = useMRT();

  const [searchValue, setSearchValue] = useState('');

  const handleChange = useAsyncDebounce(
    (event: ChangeEvent<HTMLInputElement>) => {
      tableInstance.setGlobalFilter(event.target.value ?? undefined);
      onGlobalFilterChange?.(event);
    },
    200,
  );

  const handleClear = () => {
    setSearchValue('');
    tableInstance.setGlobalFilter(undefined);
  };

  return (
    <Collapse in={tableInstance.state.showSearch} orientation="horizontal">
      <TextField
        id={`mrt-${idPrefix}-search-text-field`}
        placeholder={localization.search}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearchValue(event.target.value);
          handleChange(event);
        }}
        value={searchValue ?? ''}
        variant="standard"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label={localization.clearSearch}
                disabled={searchValue?.length === 0}
                onClick={handleClear}
                size="small"
                title={localization.clearSearch}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...muiSearchTextFieldProps}
        sx={{ justifySelf: 'end', ...muiSearchTextFieldProps?.sx }}
      />
    </Collapse>
  );
};
