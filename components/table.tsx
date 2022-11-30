import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';

interface Props {
    cols: Array<any>,
    rows: Array<any>
    // any props that come into the component
}

export default function DenseTable({cols, rows}: Props) {
    return (
    <TableContainer component={Paper}  sx={{
      width: {
        xs: '100%', // theme.breakpoints.up('xs')
        sm: '100%', // theme.breakpoints.up('sm')
        md: 300, // theme.breakpoints.up('md')
        lg: 400, // theme.breakpoints.up('lg')
        xl: 500, // theme.breakpoints.up('xl')
      },
    }}>
      <Table aria-label="a dense table">
        {/* <TableHead>
          <TableRow >
            {cols.map((item: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, index: number) =>
                <TableCell key={index.toString()} style={{ width: 50 }} align="left">{item}</TableCell>
            )}
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows&&rows.map((row: (React.Key | null | undefined)[], index: number) => (
            <TableRow
              key={index.toString()}
              sx={{  '&:last-child td, &:last-child th': { border: 0 } }}
            >
                {cols.map((col: any, index: number ) => 
                    <TableCell key={index.toString()} component="th" scope="row" >
                      <Typography sx={{fontWeight: (index==0)?'bold':'' }}>
                        {row[index]}
                      </Typography>
                    </TableCell>
                )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
