import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function SimplePaper(props) {
  return (
    <Box
      className="paper"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1
        },
      }}>
      <Paper>{props.children}</Paper>
    </Box>
  );
}
