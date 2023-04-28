import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import VisitCard from '../pages/VisitCard';
import '.././index.css';

import { Button, Grid, Typography } from '@mui/material';
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
        <Button
          style={{ display: 'flex', justifyContent: 'center' }}
          align='left'
          variant='body1'
          component={'div'}
          id='button-myvisits'
          onClick={() => navigate('/')}>
          Go back to homepage
        </Button>
        {
          currentUser && currentUser.id ?
            // ( isLoading || currentUser && currentUser.id ) ? 
            <>
              <Grid container spacing={4} className={classes.gridContainer}>
                <Typography style={{ fontSize: 12, marginLeft: 40, marginTop: 10 }} align='center' id="button-myvisits" component={'div'} variant='body2'>
                  My Visits Only
                </Typography>

                <div className='visit-list-scrollbar' >
                  <Grid component={'div'} item xs={12} sm={6} md={20}>
                    <Typography component={'div'}>
                      {visits.map((visit) =>
                        <VisitCard key={visit.id} visit={visit} />
                      )}
                    </Typography>
                  </Grid>
                </div>
              </Grid>
            </> : null
            }
      </center>
    </div>
  )
};
