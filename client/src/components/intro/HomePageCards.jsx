import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function SpacingGrid() {

 const navigate = useNavigate();

 return (
  <Grid sx={{ flexGrow: 1 }}>
   <Grid>
    <Grid
     container
     justifyContent="center"
     spacing={-0.4}>
      
     <Card sx={{ maxWidth: 438 }} onClick={() => navigate('/my-visits')}>
      <CardMedia
       sx={{ width: 550, height: 200 }}
       image="https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1400.804.jpg"
       title="yosemite"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        My Visits
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Trailheads that I have visited and hiked       
       </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
     </Card>&nbsp;&nbsp;&nbsp;

     <Card sx={{ maxWidth: 439 }} onClick={() => navigate('/trailheads')}>
      <CardMedia
       sx={{ width: 550, height: 200 }}
       image="https://www.myutahparks.com/wp-content/uploads/2021/02/Zion-Watchman-swimmers_Tam19RichMartello_1600.jpg"
       title="zion national park"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        All Trailheads
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Displays all famous trailheads
       </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
     </Card>&nbsp;&nbsp;&nbsp;

     <Card sx={{ maxWidth: 439 }} onClick={() => navigate('/visits')}>
      <CardMedia
       sx={{ width: 550, height: 200 }}
       image="https://www.sftravel.com/sites/default/files/styles/hero/public/2022-11/yosemite-falls.webp?h=05d46cef&itok=3r7CsbMg"
       title="yosemite falls"
      />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Hikers Visited
       </Typography>
       <Typography variant="body2" color="text.secondary">
       Has all the users who have visited the famous trailheads. 
       </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
     </Card>

    </Grid>
   </Grid>
  </Grid>
 );
}
