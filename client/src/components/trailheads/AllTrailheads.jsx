import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { HeaderNav } from '../navigation/HeaderNav';
import { TrailheadCard } from './TrailheadCard';
import { useSelector } from 'react-redux';
import GoogleMaps from '../googlemaps/GoogleMaps';
import '.././index.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
 backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
 ...theme.typography.body2,
 padding: theme.spacing(1),
 textAlign: 'center',
 color: theme.palette.text.secondary,
 flexGrow: 1,
}));

export default function AllTrailheads() {

 const trailheads = useSelector((state) => state.trailheadsReducer);

 const navigate = useNavigate();

 const trailheadCards = trailheads.map((th) =>
  <TrailheadCard
   key={th.id}
   th={th}
  />
 );

 return (
  <div>
   <HeaderNav /><br />
   <Button onClick={() => navigate('/')}>Back</Button>
   <center>
   <Box>
   {/* <Box sx={{ width: 130 }}> */}
    <Stack direction="row">
     {/* <Item sx={{ paddingLeft: 75 }} useFlexGap flexWrap="wrap" className='scrollbar' > */}
     <Item className='all-trailheads-scrollbar' align='center'>
      {trailheadCards}
     </Item>
     <Item>
       <GoogleMaps />
     </Item>
    </Stack>
   </Box>
   </center>
  </div>
 );
}