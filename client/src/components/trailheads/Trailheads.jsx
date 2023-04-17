import React from 'react';
import { useSelector } from 'react-redux';
import { TrailheadCard } from './TrailheadCard';

export const Trailheads = () => {

  const trailheads = useSelector((state) => state.trailheadsReducer);
  const trailheadCards = trailheads.map((th) => <TrailheadCard key={th.id} th={th} /> )

  return (
    <div>
      {trailheadCards}
    </div>
  )
};