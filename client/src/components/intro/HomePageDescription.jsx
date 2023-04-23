import React from 'react';
import { mountain_image, styles } from '../styles/LandingCSS';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';

// This application is created with React Redux. 
// When someone tells you to actually 'Take A Hike', you take a hike. 
class HomePageDescription extends React.Component {
  
  render() {
    const { classes } = this.props
  
  return (
    <div>
    <Parallax
    //  blur={3}
     style={mountain_image}
     bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
     strength={680}
    >
     <div className={classes.overlay}>
      <Grid container>
       <Grid>
        <div className={classes.main}>
         <Typography
          className={classes.title3}
          variant="h4"
          style={{ fontFamily: 'Raleway' }}
         >
          {/* When someone tells you to actually 'Take A Hike', thinking on the bright side of it...you take a hike.  */}
          Mountains aren’t just funny. They’re hill-areas.
         </Typography>
         <br />
        </div>
       </Grid>
      </Grid>
     </div>
    </Parallax>
   </div>
  );
 }
}

export default withStyles(styles)(HomePageDescription);