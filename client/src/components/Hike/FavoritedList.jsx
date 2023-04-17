import React from 'react';
import { useSelector } from 'react-redux';
import { FavoriteCard } from './FavoriteCard';

// TODO: REVISIT

export const FavoritedList = () => {

 const { currentUser } = useSelector((state) => state.usersReducer)
 const visits = useSelector((state) => state.visitsReducer);
 console.log(visits, "visited add to favorites");

 const favoritedTrailheadCard = visits.map((v) => <FavoriteCard key={v.id} v={v} />)
 const res = visits.filter((v) => v.visited !== false);
 console.log(res, "favorite List");

  return (
    <div>
     <center><h1>Favorited</h1></center>
      {favoritedTrailheadCard.visited === true ? currentUser.username : "None Found!"}
    </div>
  )
};
