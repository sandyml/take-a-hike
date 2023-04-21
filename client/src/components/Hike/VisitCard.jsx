import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { deleteVisit } from '../actions/visits';
import { header } from '../../Global';

import { Check, FmdGoodRounded, Route } from '@mui/icons-material';
import { Avatar, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
  height: 600,
}));

const VisitCard = ({ visit, isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
  };

  const amenities = visit.amenities.map((a) => <div key={a.id}><Check />{a.name}</div>)

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
      <Item sx={{ my: 1, mx: 'auto', p: 2 }} >
        <Typography noWrap>{visit.trailhead.name}</Typography><br />
        <Stack spacing={2} direction="row" alignItems="center">
          <Card sx={{ maxWidth: 400 }} >
            {visit.hike.map((vh) =>
              <div key={vh.id}>{vh.distance} 
              {vh.elevation_gain}
              <CardMedia
                sx={{ width: 400, height: 200 }}
                image={vh.image_url} />
                </div>
            )}
            <CardContent sx={{ height: 220 }}>
              <FmdGoodRounded /> {visit.trailhead.location}
              <div className="ex1">
              {amenities}
              {visit.trailhead.fees}
              <Typography align='center' variant="body2" color="text.secondary">
                <Route />{' '}
                <NavLink href={visit.trailhead.direction} variant="body2">
                  Directions
                </NavLink>
              </Typography>
              </div>
            </CardContent>
          </Card>

          <Route />{' '}
            <NavLink href={visit.trailhead.direction} variant="body2">
              Directions
            </NavLink>

        </Stack>
        {' '}You visited on {visit.visited_date}<br /><br />
        {currentUser && currentUser.id === visit.user.id ?
          <>
            <Button variant="outlined" onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</Button>{' '}
            <Button variant="outlined" onClick={handleDelete} type='delete'>Remove</Button>
          </> : null}
      </Item>
    </Box>

  )
};

export default VisitCard;

