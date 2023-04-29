import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Grid, Stack } from '@mui/material';
import { TrailheadCard } from './TrailheadCard';

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);

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
      <center>
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

        <Stack direction="row" >

          <div className='trailheads-scrollbar' >
              <Grid>
                {
                  currentUser && currentUser.id ?
                    <div>
                      {trailheads?.map((th) => <TrailheadCard
                        key={th.id}
                        th={th}
                        isLoading={isLoading}
                      />
                      )}
                    </div>
                    : null}
            </Grid>
          </div>
        </Stack>

      </center>
    </div>
  )
  // }
};