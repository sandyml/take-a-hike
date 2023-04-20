import React from 'react';
import { mountain_image, styles } from '../styles/LandingCSS';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { HeaderNav } from '../navigation/HeaderNav';
import { Copyright } from '../copyright/Copyright';
import HomePageCards from './HomePageCards';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
import HomePageDescription from './HomePageDescription';

class HomePage extends React.Component {
  
  render() {
    const { classes } = this.props
  
  return (
   <div>
    <HeaderNav />
    <Parallax
     style={mountain_image}
     bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
     strength={680}
    >
     <div className={classes.overlay}>
      <Grid container>
       <Grid item md={20}>
        <div className={classes.main}>
         <Typography
          className={classes.title}
          variant="h4"
          style={{ fontFamily: 'Raleway' }}
         >
          TakeAHike
         </Typography>
         <br />
        </div>
       </Grid>
      </Grid>
     </div>
    </Parallax>
    <HomePageCards /><br/>
    <HomePageDescription />
    <Copyright />
   </div>
  );
 }
}

export default withStyles(styles)(HomePage);