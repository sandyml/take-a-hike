import React from 'react';
import { Parallax } from 'react-parallax';
import { mountain_image9 } from '../styles/LandingCSS';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Grid, Typography, withStyles } from '@material-ui/core';

const styles = (theme) => ({
 mainFeaturedPost: {
  backgroundImage: 'url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)',
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '70% 50%',
  backgroundSize: 'cover',
  position: 'relative',
  paddingBottom: 150,
  paddingTop: 290,
  paddingLeft: 50,
  marginRight: 40,
  marginLeft: 42,
  height: "88vh"
 },
 overlay: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.2)',
  height: "100vh"
 },
 main: {
  position: 'relative',
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(6),
   paddingRight: 0,
  },
 },
 title: {
  fontSize: 200,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(6),
   paddingRight: 40,
   paddingTop: 250,
   zIndex: 'tooltip'
  },
 },
 subtitle: {
  fontSize: 45,
  //  fontFamily: "Google Sans, Roboto, arial, sans-serif",
  color: "white",
  paddingLeft: 60,
  letterSpacing: "3px",
  lineHeight: "1.5"
 },
});

class HomePageBottom extends React.Component {

 render() {
  const { classes } = this.props

  return (
   <div>
    <Parallax
     //  blur={3}
     style={mountain_image9}
     bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
     strength={680}
    >
     <div className={classes.overlay}>
      <Grid container>
       <Grid>
        <Typography
         variant="h4"
         id='landing'
         style={{
          color: 'white',
          marginLeft: 10,
          zIndex: 10,
          fontFamily:
           'Aurora ',
          fontWeight: 0,
          fontSize: 70,
          right: '100%'
         }}
        >
         Contact Us
        </Typography><hr/>
        <Typography
         variant="h4"
         id='landing'
         style={{
          color: 'white',
          marginLeft: 45,
          zIndex: 10,
          fontFamily:
           'Playfair Display, serif',
          fontWeight: 0,
          fontSize: 30,
          left: '100%',
         }}
        >
         (222) 222-2222<br/>
         takeahike@pretentemail.com
        </Typography>
        <br />
        {/* </div> */}
       </Grid>
      </Grid><br/>

      <Grid container>
       <Grid>
        <Typography
         variant="h4"
         id='landing'
         style={{
          color: 'white',
          marginLeft: 10,
          zIndex: 10,
          fontFamily:
           'Aurora ',
          fontWeight: 0,
          fontSize: 70,
          right: '100%'
         }}
        >
         Follow Us
        </Typography><hr/>
        <Typography
         variant="h4"
         id='landing'
         style={{
          color: 'white',
          marginLeft: 45,
          zIndex: 10,
          fontFamily:
           'Playfair Display, serif',
          fontWeight: 0,
          fontSize: 40,
          left: '100%',
         }}
        >
         <FacebookIcon fontSize='20' />
         <TwitterIcon fontSize='20' />
         <InstagramIcon fontSize='20' />
         <PinterestIcon fontSize='20' />
        </Typography>
        <br />
        {/* </div> */}
       </Grid>
      </Grid>
     </div>
    </Parallax>
   </div>
  );
 }
}

export default withStyles(styles)(HomePageBottom);