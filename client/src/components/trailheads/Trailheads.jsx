import React from 'react';
import { useSelector } from 'react-redux';
import { TrailheadCard } from './TrailheadCard';
import { Button, Grid, Typography } from '@material-ui/core'

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);

  // const checkIfParkIsSaved = (checkPark) => {
  //     return savedParks.find(park => park.id === checkPark.id)
  // }

  // if (trailheads.errors) {
  //   return (
  //     <div>
  //       <center>
  //         <BottomNavigation />
  //         <img className='loading' 
  //         src="https://media0.giphy.com/media/UrEfC5EKRp4eQZdLSS/giphy.gif?cid=6c09b9529c716e9af32d817070c701b08bf924ca8b329f02&rid=giphy.gif&ct=s"
  //         alt='trailheads-alt'
  //         />
  //       </center>
  //     </div>
  //   )
  // } else {

  return (
    <div>
      <a variant="text" href='/' target="_parent">
        <Button
          component={'button'}
          color='inherit'
          variant="text"
          style={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif', color: "white" }}
        >
          Go back to homepage!
        </Button>
      </a>

      <Grid container
        id="results"
        direction="column"
        justifyContent="center"
        alignItems="center" >
        <Grid container item
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ position: 'relative' }}
        >
          <Typography
            style={{ fontSize: 90, color: 'white', fontFamily: 'aesthetica', letterSpacing: 0, fontWeight: 200 }}
            variant="h3"
            component="h2"
            className="center"
            gutterBottom>
            <span className="subtitle"></span>
            All Trailheads
          </Typography>
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