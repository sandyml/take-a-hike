import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteVisit } from '../actions/visits';
import { header } from '../../Global';

import { Check, EditCalendarOutlined, FmdGoodRounded } from '@mui/icons-material';
import {
  Box, Button,
  Card, CardContent, CardMedia, CssBaseline, createTheme,
  Grid,
  Typography,
  ThemeProvider
} from '@mui/material';
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
    <Typography
      sx={{
        fontFamily: 'Google Sans, Roboto, arial, sans-serif'
      }}
      variant='body3'
      key={a.id}
    >
      <Check
        style={{
          color: "green",
          fontSize: "small"
        }}
      />
      {a.name}
    </Typography>
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
      <Box>
        <Card
          component={'div'}
          sx={{
            maxWidth: 593,
            height: 620,
            paddingBottom: 10,
            marginBottom: 5
          }}
        >
          <Grid
            sx={{ flexGrow: 1 }}
            col={3}
            style={{
              justifyContent: 'center',
            }}
          >
            {currentUser && currentUser.id === visit.user.id ?
              <div align='right' >
                <Button sx={{ width: 50, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='lightsage' size='small' variant="text" onClick={() => navigate(`/visits/${visit.id}/edit`)}>edit<EditCalendarOutlined /></Button>&nbsp;&nbsp;&nbsp;
                <Button sx={{ width: 50, paddingRight: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} color='lightsage' size='small' variant="text" onClick={handleDelete} type='delete'>remove<DeleteOutlineIcon size='small' /></Button>
              </div> : null}

            <CssBaseline />
            <Typography sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} variant='body4' component={'div'} align='left'>&nbsp;&nbsp;{visit.user.username} visited on {visit.visited_date}</Typography>
            {visit.hike.map((vh) =>
              <CardMedia
                key={vh}
                sx={{ width: 593, height: 300 }}
                image={vh.image_url}>
              </CardMedia>
            )}
            <Typography 
            style={{
              fontSize: 40,
              color: 'black',
              fontFamily: 'aesthetica',
              letterSpacing: 0,
              align: 'right',
              fontWeight: 'bold',
            }}  
            component={'div'}>
              {visit.trailhead.name}
              </Typography>
            <CardContent>
              <FmdGoodRounded style={{ color: "red" }} /><Typography sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }}>{visit.trailhead.location}</Typography>
              <Typography sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} variant='body3' component={'div'} >
                difficulty:&nbsp;{difficulties.join(', ')}
                {visit.hike.map(eg =>
                  <Typography sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} key={eg.id}>
                    elevation gain: {eg.elevation_gain}&emsp;
                    distance: {eg.distance}
                  </Typography>
                )}
                <hr />
                &emsp;{visit.trailhead.fees}&emsp;&emsp;
              </Typography>
              <hr />
              <Typography sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} flexDirection='row' col={2} variant='body3' component={'div'}>
                {amenities}
              </Typography><br />
            </CardContent>
          </Grid>
        </Card>
      </Box>

    </ThemeProvider>
  )
};

export default VisitCard;