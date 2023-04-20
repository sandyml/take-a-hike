import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { HeaderNav } from '../navigation/HeaderNav';
import { Copyright } from '../copyright/Copyright';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Paper, makeStyles, styled } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import '.././index.css';
import { Button } from '@mui/material';

// TODO: Customize a bit more 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sage: {
    backgroundColor: "#6E7F62"
  },
  lightSage: {
    backgroundColor: "#919F88"
  },
  lighterSage: {
    backgroundColor: "#C3CDBF"
  },
  grey: {
    backgroundColor: "#E0CD9"
  },
}));

export const MyVisitList = ({ isLoading }) => {
  const classes = useStyles();
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
  console.log(currentUser, "currentUser");

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate]);

  if (currentUser === null) {
    return <div></div>
  }

  return (
    <div>
      <HeaderNav />
      <Typography align='center' variant='h2'>Trailheads I've Visited</Typography><br/>
      <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>Go back to homepage</Button><br/><br/>
      <Grid sx={{ flexGrow: 1 }} container spacing={3}>
        {currentUser.visits.map((current, cid) =>

          <Grid key={cid.id}>
            <Grid
              item xs={1} md={12}
              container
              justifyContent="center"
              spacing={-0.01}>
              <Card sx={{ maxWidth: 488 }}>
                <Item>
                  <CardMedia
                  sx={{ width: 601, height: 250 }}
                  image={current.hike.map((ch) => ch.image_url)}
                  title="yosemite"
                />
                </Item>

                <CardContent>
                  <Typography align='center' gutterBottom variant="h5" component="div">
                    {current.trailhead.name}
                  </Typography>
                  <Typography align='center' variant="body2" color="text.secondary">
                    {current.trailhead.location}<br /><br />
                    {' '}You visited on {current.visited_date}
                  </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        )}
          <Typography  justifyContent="center">
          <Copyright align='center'/>
          </Typography>
      </Grid>
    </div>
  );
}
