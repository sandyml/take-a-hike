import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '.././index.css';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { mountain_image } from '../styles/LandingCSS';
import { Parallax } from 'react-parallax';


export const MyVisitList = ({ isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
  console.log(currentUser, "currentUser");

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
      <Button 
        size="small"
        // variant="outlined" 
        component='div' 
        sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif', borderRadius: 20, color: 'black' }}  
        onClick={() => navigate('/')} 
        >
          Back
        </Button>
      <Parallax 
        style={mountain_image} 
        bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80" 
        strength={680}
      >
      <Typography component='div' align='center' variant="h5" marginTop={1} sx={{ marginTop: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif', color: 'white' }}>{currentUser.username}'s Gallery</Typography>
    <Stack direction="row" >
      
    <div className="objects-box">
    <div className="object">

    </div>
   </div>
      <div className='card-my-visit'>
      {
        currentUser.visits.map((current) => <div key={current.id}>
        {current.hike.map((ch) =>
          <img className='parks-img' key={ch.id} src={ch.image_url} alt=''/> )}
        </div>
        )}
      </div>
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
