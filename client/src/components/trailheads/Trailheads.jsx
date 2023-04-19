import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TrailheadCard } from './TrailheadCard';

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  if (trailheads.errors) {
    return <div></div>
  }

  const trailheadCards = trailheads.map((th) =>
    <TrailheadCard
      key={th.id}
      th={th}
      isLoading={isLoading}
    />
  )

  return (
    <div>
      {trailheadCards}
    </div>
  )
};