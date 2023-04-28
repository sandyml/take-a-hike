import { Button, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { TrailheadCard } from './TrailheadCard';

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  // const trailheadCards = trailheads?.map((th) => <TrailheadCard
  //   key={th.id}
  //   th={th}
  //   isLoading={isLoading}
  // />
  // );

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

        {/* <Button
          style={{ display: 'flex', justifyContent: 'center' }}
          align='left'
          variant='body1'
          onClick={() => navigate('/')}>
          Go back to homepage!
        </Button> */}
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

        <div className='trailheads-scrollbar' >
          <Grid component={'div'} item xs={12} sm={6} md={20}>

            <Grid>
              {
                currentUser && currentUser.id ?
                  // isLoading || currentUser && currentUser.id ? 
                  <div>
                    {trailheads?.map((th) => <TrailheadCard
                      key={th.id}
                      th={th}
                      isLoading={isLoading}
                    />
                    )}
                  </div>

                  : null
              }
            </Grid>
          </Grid>
        </div>

      </center>
    </div>
  )
  // }
};