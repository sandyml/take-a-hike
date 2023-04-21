import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HeaderNav } from '../navigation/HeaderNav';
import '.././index.css';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Parallax } from 'react-parallax';
import { mountain_image } from '../styles/LandingCSS';


export const MyVisitList = ({ isLoading }) => {
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
    <div><center>
      <HeaderNav />
      <Typography align='center' variant='h2'>Trailheads I've Visited</Typography><br />
      <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>Go back to homepage</Button><br /><br />
      <Parallax
        style={mountain_image}
        bgImage="https://rare-gallery.com/uploads/posts/5395286-cloud-mountain-winter-summit-snowcap-pastel-forest-snow-pink-rock-tree-outdoor-alp-sky-hiking-altitude-mountaineering-season-clear-resort-creative-commons-images.jpg"
        strength={680}
      ><br/>
        <div >
          <Grid container spacing={-1}>
            <Grid >    
                 <Grid sx={{ flexGrow: 1 }} container spacing={-1}>
                    {currentUser.visits.map((current) =>
                      <Grid key={current.id}>
                        <Grid
                          container
                          justifyContent="center"
                          spacing={-1}>
                          <Card sx={{ maxWidth: 311 }} >
                            {current.hike.map((ch) =>
                              <CardMedia
                                key={ch.id}
                                sx={{ width: 601, height: 230 }}
                                image={ch.image_url}  />
                            )}
                            <CardContent sx={{ height: 120 }}>
                              <Typography align='center' gutterBottom variant="h5" component="div">
                                {current.trailhead.name}
                              </Typography>
                              <Typography align='center' variant="body2" color="text.secondary">
                                {current.trailhead.location}<br /><br />
                                {' '}You visited on {current.visited_date}
                              </Typography>
                            </CardContent>
                          </Card><br/>
                        </Grid>
                      </Grid>
                    )}
                  </Grid>
                  <Typography justifyContent="center">
                  </Typography>
                <br />
            </Grid>
          </Grid>
        </div>
      </Parallax>
      </center>
    </div>
  );
}
