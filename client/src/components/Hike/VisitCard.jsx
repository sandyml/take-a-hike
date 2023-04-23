import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { deleteVisit } from '../actions/visits';
import { header } from '../../Global';

import { Check, FmdGoodRounded, Route } from '@mui/icons-material';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Paper, Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 600,
  height: 760,
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

  const amenities = visit.amenities.map((a) => 
  <div key={a.id}><Check />{a.name}</div>
  )

  return (
    <Box sx={{ flexGrow: 1, overflow: 'hidden'}}>
      <Item sx={{ my: 0.5, mx: 'auto', p: 2 }} >

        {currentUser && currentUser.id === visit.user.id ?
          <>
            <Button variant="text" onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</Button>{' '}
            <Button variant="text" onClick={handleDelete} type='delete'>Remove</Button>
          </> : null}

        <Typography component={'div'} noWrap variant="h5">{visit.trailhead.name}</Typography>
        <Typography component={'div'} noWrap align='left'>You visited on {visit.visited_date}</Typography>
        {/* <Stack spacing={2} direction="row" alignItems="center"> */}
          <Card sx={{ maxWidth: 900, height: 670, }} >
            {visit.hike.map((vh) =>
                <CardMedia
                  key={vh}
                  sx={{ width: 900, height: 290 }}
                  image={vh.image_url}>
                {/* <b>elevation gain:</b> {vh.elevation_gain}{' '}
                <b>distance:</b> {vh.distance} */}
                  </CardMedia>
            )}
            <CardContent>
              <FmdGoodRounded /> {visit.trailhead.location}
                <Typography variant="body2" component={'div'}>
                  {amenities}
                </Typography>
                <Typography variant="caption" component={'div'}>
                  {visit.trailhead.fees}
                </Typography>
                <Typography component={'div'} variant="caption" display="block" align='center' color="text.secondary">
                  <Route />{' '}
                  {/* <NavLink href={visit.trailhead.direction} variant="body2"> */}
                    Directions
                  {/* </NavLink> */}
                </Typography>
            </CardContent>
          </Card>
        {/* </Stack> */}
      </Item>
    </Box>

  )
};

export default VisitCard;
