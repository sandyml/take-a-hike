import React from 'react';
import { mountain_image } from '../styles/LandingCSS';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';

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
   fontSize: 110,
   textAlign: "center",
   color: "white",
   padding: theme.spacing(3),
   [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    paddingRight: 40,
    paddingTop: 250
   },
  },
  subtitle: {
   fontSize: 45,
   fontFamily: "Google Sans, Roboto, arial, sans-serif",
   color: "white",
   paddingLeft: 60,
   letterSpacing: "3px",
   lineHeight: "1.5"
  },
 });

class LogoutLanding extends React.Component {
  
  render() {
    const { classes } = this.props
  
  return (
   <div>
    <Parallax
     blur={3}
     style={mountain_image}
     bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
     strength={680}
    >
     <div className={classes.overlay}>
      <Grid container>
       <Grid>
        <div className={classes.main}> 
         <Typography
          className={classes.title}
          variant="h4"
          style={{ fontFamily: 'Playfair Display, serif' }}
         >
          You are now logged out! Thank you for visiting.
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

export default withStyles(styles)(LogoutLanding);