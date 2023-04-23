import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { HeaderNav } from '../navigation/HeaderNav';
import '.././index.css';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { Button, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { mountain_image } from '../styles/LandingCSS';
import { Parallax } from 'react-parallax';
import { backgroundImage } from '../../Global';


export const MyVisitList = ({ isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
  console.log(currentUser, "currentUser")
// debugger
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate]);

  if (currentUser === null) {
    return <div></div>
  }

  return (
    <div>
      <Parallax 
      style={mountain_image} 
      bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
      // bgImage={mountain_image} 
      strength={680}
      >

<Typography component='div' align='center' variant="h5">{currentUser.username}'s Gallery</Typography>
      
    <Stack direction="row" spacing={2}>
      {/* <Typography component='div' variant="h5" align='center'>{currentUser.username}'s Gallery</Typography> */}
      {/* <Card> */}

      <div className='card-my-visit'>
      {
        currentUser.visits.map((current) => <div key={current.id}>
        {/* {current.trailhead.name} */}
        {current.hike.map((ch) =>
          <img className='parks-img' key={ch.id} src={ch.image_url} alt=''/> )}
        {/* <div className='overlay'> */}
        {/* {current.trailhead.name} */}
        {/* </div> */}
            {/* {current.trailhead.location}<br /><br /> */}
            {/* {' '}You visited on {current.visited_date}           */}
            </div>
            )}
      </div>
            {/* </Card> */}
    </Stack>
            </Parallax>
            </div>
  );
}


//   return (
//     <div><center>
//       <HeaderNav />
//       <Typography align='center' variant='h2'>Trailheads I've Visited</Typography><br />
//       <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>
//         Go back to homepage
//       </Button><br /><br />
//       {/* <Parallax style={mountain_image} bgImage={backgroundImage} strength={680}><br /> */}
//         {/* <Grid
//         container item xs={10}
//           columns={2}
//           align="horizontal"
//           spacing={0}
//           direction="column"
//           alignItems="center"
//           justify="center"
//           style={{ minHeight: '100vh' }}
//         > */}
//           <Grid >
//           <Grid>
//               {currentUser.visits.map((current) =>
//                 <Grid key={current.id}>

//                     <Card sx={{ maxWidth: 311 }} >
//                       {current.hike.map((ch) =>
//                         <CardMedia
//                           key={ch.id}
//                           sx={{ width: 601, height: 230 }}
//                           image={ch.image_url} />
//                       )}
//                       <CardContent sx={{ height: 80 }}>
//                         <Typography align='center' gutterBottom variant="h5" component="div">
//                           {current.trailhead.name}
//                         </Typography>
//                         <Typography align='center' variant="body2" color="text.secondary">
//                           {current.trailhead.location}<br /><br />
//                           {' '}You visited on {current.visited_date}
//                         </Typography>
//                       </CardContent>
//                     </Card><br />
                  
//                 </Grid>
//               )}
//             </Grid>

//             <Typography justifyContent="center">
//             </Typography>

//             <br />
//           </Grid>
//       {/* </Parallax> */}
//     </center>
//     </div>
//   );
// }
