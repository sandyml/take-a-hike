import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import VisitCard from './VisitCard';
import '.././index.css';

// import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Card, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: "20px",
//     paddingRight: "40px"
//   }
// });

export const MyVisits = () => {
  // const classes = useStyles();

  const { currentUser, visits } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  // const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

  return (
    <div id='myvisits-div'>
      <center>
      <AppBar position="sticky" id='appbar'>
          <Toolbar>
            <Button 
            style={{ marginLeft: -9 }}
            top={8}
            onClick={() => navigate('/')} 
            color="inherit">
              Go back to homepage
              </Button>
            <Typography
            style={{
              marginLeft: 350,
              align: 'center',
              fontSize: 90,
              fontFamily: 'aesthetica',
              letterSpacing: 0,
              fontWeight: 260,
            }}
             component="h2"
             variant="h6"
             >
              Places I've Visited
              </Typography>
          </Toolbar>
        </AppBar>
        <Grid container
          direction="row"
        >
          <Grid container item
            direction="row" 
          >
            <CssBaseline />
            {
              currentUser && currentUser.id ?
                // ( isLoading || currentUser && currentUser.id ) ? 
                <>
                  <Grid container item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ position: 'relative' }}
                  >
                  </Grid><br/>
                  <Grid
                    sx={{
                      paddingRight: 2,
                      paddingLeft: 2,
                      paddingTop: 2,
                      paddingBottom: 5,
                      marginBottom: 10
                    }}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="stretch"
                    item xs={1} md={12} sm={6}
                    container
                  >

                    <Typography style={{ marginTop: 40 }} component={'div'}>
                      {visits.map((visit) =>
                        <VisitCard key={visit.id} visit={visit} />
                      )}
                    </Typography>
                  </Grid>
                </> : null}
          </Grid>
        </Grid>
      </center>
      <Copyright/>
    </div>
  )
};

export function Copyright(props) {
  return (
    <Card id='appbar'>
      <Typography variant="body2" style={{ color: 'white' }} align="center" {...props}>
        {'Copyright © Sandra Yun '}
        <NavLink color="inherit" href="https://github.com/sandyml/take-a-hike">
          Github
        </NavLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Card>
  );
}