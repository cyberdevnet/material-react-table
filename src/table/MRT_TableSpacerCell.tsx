import React, { CSSProperties, FC } from 'react';
import { TableCell } from '@mui/material';
import { useMRT } from '../useMRT';

interface Props {
  width?: CSSProperties['width'];
}

export const MRT_TableSpacerCell: FC<Props> = ({ width }) => {
  const { muiTableBodyCellProps } = useMRT();

  const tableCellProps =
    muiTableBodyCellProps instanceof Function
      ? muiTableBodyCellProps()
      : muiTableBodyCellProps;

  return (
    <TableCell {...tableCellProps} sx={{ width, ...tableCellProps?.sx }} />
  );
};
