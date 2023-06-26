import React from 'react';
import { useSelector } from 'react-redux';
import { TrailheadCard } from './TrailheadCard';
import { Button, Grid, Typography } from '@material-ui/core'
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);
  
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="sticky" id='appbar'>
        <Toolbar>
        <a variant="text" href='/' target="_parent">
          <Button
            style={{ color: 'white' }}
            top={8}
            onClick={() => navigate('/')}
            color="inherit">
            Go back to homepage
          </Button>
          </a>
          <Typography
            style={{
              color: 'white',
              marginLeft: 390,
              align: 'center',
              fontSize: 90,
              fontFamily: 'aesthetica',
              letterSpacing: 0,
              fontWeight: 260,
            }}
            component="h2"
            variant="h6"
          >All Trailheads
          </Typography>
        </Toolbar>
      </AppBar><br/>
      <Grid container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container item
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'relative' }}
        >
        </Grid>

        <Grid container item
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
          spacing={6}
        >
          {currentUser && currentUser.id ?
            <>
              {trailheads?.map((th) => <TrailheadCard
                key={th.id}
                th={th}
                isLoading={isLoading}
              />
              )}
            </>
            : null}
        </Grid>

      </Grid>
    </div>
  )
}