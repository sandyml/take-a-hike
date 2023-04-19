import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const MyVisitList = ({ isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  return (
    <div>
      <center><h1>Trailheads I've Visited</h1>

        <h3> {currentUser.username}'s Account</h3>
        <div>
          {currentUser.visits.map((current, cid) =>
            <div key={cid}><h2>{current.trailhead.name}</h2>
              {current.trailhead.location}<br /><br />{' '}you visited on: {current.visited_date}<br />
              {/* <img src={current.hike.image_url} alt="img-url" /><br /> */}
              {/* distance: {current.hike.distance}<br/> */}
              {/* <Button onClick={() => handleDelete(current.id)} type='delete'>{isLoading ? "Deleting..." : "Remove"}</Button> */}
              {/* <Button type="submit">{isLoading ? "Loading..." : "Edit"}</Button> */}
              {/* <Button onClick={() => navigate(`/visits/${current.id}/edit`)}>Edit</Button> */}
              {/* <Button onClick={handleDelete} type='delete'>Remove</Button> */}
              {/* <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button> */}
            </div>)}
        </div>

      </center>
    </div>
  )
}