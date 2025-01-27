import React, { ChangeEvent, FC } from 'react';
import { TablePagination } from '@mui/material';
import { useMRT } from '../useMRT';

interface Props {}

export const MRT_TablePagination: FC<Props> = () => {
  const { tableInstance, muiTablePaginationProps } = useMRT();

  const tablePaginationProps =
    muiTablePaginationProps instanceof Function
      ? muiTablePaginationProps(tableInstance)
      : muiTablePaginationProps;

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    tableInstance.setPageSize(+event.target.value);
    tableInstance.gotoPage(0);
  };

  return (
    <TablePagination
      component={'div'}
      count={tableInstance.rows.length}
      onPageChange={(_, newPage) => tableInstance.gotoPage(newPage)}
      onRowsPerPageChange={handleChangeRowsPerPage}
      page={tableInstance.state.pageIndex}
      rowsPerPage={tableInstance.state.pageSize}
      SelectProps={{ style: { margin: '0 1rem 0 1ch' } }}
      showFirstButton={
        tableInstance.rows.length / tableInstance.state.pageSize > 2
      }
      showLastButton={
        tableInstance.rows.length / tableInstance.state.pageSize > 2
      }
      {...tablePaginationProps}
      sx={{
        m: '0 0.5rem',
        position: 'relative',
        zIndex: 2,
        ...tablePaginationProps?.sx,
      }}
    />
  );
};
