import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import VisitCard from './VisitCard';
import '.././index.css';

import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "40px"
  }
});

export const MyVisits = () => {
  const classes = useStyles();

  const { visits, currentUser } = useSelector((state) => state.usersReducer);
  // const { currentUser } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  // const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

  return (
    <div id='myvisits-div'>
      <center>
        <Grid container
          direction="row"
        // justifyContent="center"
        // alignItems="center"
        >
          <Grid container item
            direction="row"
          // justifyContent="center"
          // alignItems="center" 
          >
            <Button
              style={{ color: 'white' }}
              align='left'
              variant='body1'
              component={'div'}
              id='button-myvisits'
              onClick={() => navigate('/')}>
              Go back to homepage
            </Button>
            <CssBaseline />
            {
              currentUser && currentUser.id ?
                // ( isLoading || currentUser && currentUser.id ) ? 
                <>
                  {/* <Grid container
                    spacing={4}
                    className={classes.gridContainer}> */}
                  <Grid container item
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    style={{ position: 'relative' }}
                  >
                    <Typography
                      style={{
                        fontSize: 90,
                        color: 'white',
                        fontFamily: 'aesthetica',
                        letterSpacing: 0,
                        fontWeight: 260,
                      }}
                      align='right'
                      variant="h3"
                      component="h2"
                      className="center"
                      gutterBottom>
                      <span className="subtitle"></span>
                      Places I've Visited
                    </Typography>
                  </Grid>
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
                    justifyContent="center"
                  >

                    <Typography component={'div'}>
                      {visits.map((visit) =>
                        <VisitCard key={visit.id} visit={visit} />
                      )}
                    </Typography>
                  </Grid>
                </> : null}
          </Grid>
        </Grid>
      </center>
    </div>
  )
};