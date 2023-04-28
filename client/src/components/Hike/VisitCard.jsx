import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteVisit } from '../actions/visits';
import { header } from '../../Global';

import { Check, EditCalendarOutlined, FmdGoodRounded, Route } from '@mui/icons-material';
import { Button, Card, CardContent, CardMedia, CssBaseline, Typography, createTheme, ThemeProvider } from '@mui/material';
import { Box } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#6E7F62',
      contrastText: '#fff',
    },
    lightsage: {
      main: '#919F88',
      contrastText: '#fff',
    },
    lightersage: {
      main: '#C3CDBF',
      contrastText: '#fff',
    },
  },
});


const VisitCard = ({ visit, isLoading }) => {
  // const classes = useStyles();

  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
  };

  const amenities = visit.amenities.map((a) => 
  <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}} variant='body3' key={a.id}><Check />{a.name}</Typography>
  );

  const difficulties = visit.difficulties.map(dif => dif.name);

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [isLoading, loggedIn])

  return (
    <ThemeProvider theme={theme}>

      <Box component={'div'} sx={{ my: 0.5, mx: 'auto', p: 2, paddingLeft: 45 }} display='flex' align='center'>
        <Card component={'div'} sx={{ maxWidth: 1050, height: 580 }} >
        {currentUser && currentUser.id === visit.user.id ?
          <div align='right' >
            <Button sx={{width: 50, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='lightsage' size='small' variant="text" onClick={() => navigate(`/visits/${visit.id}/edit`)}>edit<EditCalendarOutlined/></Button>&nbsp;&nbsp;&nbsp;
            <Button sx={{width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='lightsage' size='small' variant="text" onClick={handleDelete} type='delete'>remove<DeleteOutlineIcon size='small'/></Button>
          </div> : null}

          <CssBaseline />
        <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} variant='body4' component={'div'} align='left'>&nbsp;&nbsp;{visit.user.username} visited on {visit.visited_date}</Typography>
            {visit.hike.map((vh) =>
                <CardMedia
                key={vh}
                sx={{ width: 1045, height: 295 }}
                image={vh.image_url}>
                  </CardMedia>
                  )}
            <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}} variant='body3' component={'div'} align='center' >{visit.trailhead.name}</Typography>
            <CardContent>
              <FmdGoodRounded /><Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}}>{visit.trailhead.location}</Typography> 
            <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}} variant='body3' component={'div'} >
              difficulty:&nbsp;{difficulties.join(', ')}
              {visit.hike.map(eg => 
              <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}} key={eg.id}>
                elevation gain: {eg.elevation_gain}&emsp;
                distance: {eg.distance}
              </Typography>
                )}
              {/* &emsp; <Route sx={{ fontSize: 15 }} /> Directions<br/> */}
              &emsp;{visit.trailhead.fees}&emsp;&emsp;
            </Typography>
                <Typography sx={{fontFamily: 'Google Sans, Roboto, arial, sans-serif'}} flexDirection='row' col={2} variant='body3' component={'div'}>
                  {amenities}
                </Typography><br/>
            </CardContent>
          </Card>
      </Box>

    </ThemeProvider>
  )
};

export default VisitCard;