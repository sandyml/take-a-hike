// import React, { useEffect } from 'react';
// import { deleteVisit } from '../actions/visits';
// import { useNavigate, NavLink } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { header } from '../../Global';

// import { Check, FmdGoodRounded, Route } from '@mui/icons-material';
// import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
// import CardActions from '@mui/material/CardActions';

// const VisitCard = ({ visit, isLoading }) => {
//   const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!isLoading && !loggedIn) {
//       navigate('/login')
//     }
//   }, [isLoading, loggedIn, navigate])

//   const handleDelete = () => {
//     dispatch(deleteVisit(visit.id, header))
//   };

//   const amenities = visit.amenities.map((a) => <div key={a.id}><Check />{a.name}{' '}</div>)

//   return (
//     <div>
//       {visit.hike.map((h, i) =>
//         <div key={i}>
//           <img src={h.image_url} alt="img-url" style={{ width: 1000, height: 600 }} /><br />
//           <b>distance:</b> {h.distance} <b>elevation gain:</b> {h.elevation_gain}
//         </div>
//       )}

//       <FmdGoodRounded /> {visit.trailhead.location}
//       <p>{visit.trailhead.fees}</p>
//       {amenities}

//       <Route />{' '}
//       <NavLink href={visit.trailhead.direction} variant="body2">
//         Directions
//       </NavLink><br /><br />
//       <ul><b>{visit.user.username}</b> visited on {visit.visited_date}</ul>
//       <h3>

//         {currentUser && currentUser.id === visit.user.id ?
//           <>
//             <Button variant="outlined" onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</Button>{' '}
//             <Button variant="outlined" onClick={handleDelete} type='delete'>Remove</Button>
//           </> : null}
//         <hr />
//       </h3>
//     </div>
//   )
// };




// export default VisitCard;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Check, FmdGoodRounded, Route } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Grid, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { header } from '../../Global';
import { deleteUsersVisit } from '../actions/users';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export default function VisitCard({ visit, isLoading }) {
  const [expanded, setExpanded] = React.useState(false);
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  const handleDelete = () => {
    dispatch(deleteUsersVisit(visit.id, header))
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const amenities = visit.amenities.map((a) => <div key={a.id}><Check />{a.name}{' '}</div>);

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} item xs={900}>
      <Grid container justifyContent="center" spacing={300} item xs={1} md={12} pacing={-0.01}>
      {visit.hike.map((hi, i) =>
        <Card sx={{ maxWidth: 1000 }} key={i}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                {currentUser && currentUser.id === visit.user.id ?
                  <>
                    <Button variant="outlined" onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</Button>{' '}
                    <Button variant="outlined" onClick={handleDelete} type='delete'>Remove</Button>
                  </> : null}
              </IconButton>
            }
            />
            <b>{visit.user.username}</b> visited on
            {' '}{visit.visited_date}
          <CardMedia
            component="img"
            height="500"
            image={hi.image_url}
            alt="users-grid"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" align='center'>
              <FmdGoodRounded /> {visit.trailhead.location}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              open
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant='body2' align='center'>
                <b>distance:</b> {hi.distance} <b>elevation gain:</b> {hi.elevation_gain}
              </Typography>
              <Typography variant='body2' align='center'>
                {amenities}
              </Typography>
              <Typography variant='body2' align='center' >
                <Route />{' '}
                <NavLink href={visit.trailhead.direction} variant="body2">
                  Directions
                </NavLink>
              </Typography>
              <Typography variant='body2' align='center'>
                <p>{visit.trailhead.fees}</p>.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      )}
      </Grid>
    </Grid>
  );
}
