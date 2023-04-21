// sx={{ paddingLeft: 18, width: 210 }}

import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function YouTube({ visit }) {
  console.log(visit, "Youtube")
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>{visit.trailname.name}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// throw away!!! 
