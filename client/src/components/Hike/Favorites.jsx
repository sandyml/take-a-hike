import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const Favorites = () => {
 const [favorites, setFavorites] = useState([]);

   const addFavorites = (park) => {
    const prevFavorites = [...favorites];
    const newFavorites = prevFavorites.concat(park);
    setFavorites(newFavorites, ...favorites);
  };

 const favoritesList = (id) => {
  const fave = favorites.some((park) => park.id === id);
  return fave;
 };

 const removeFavorites = (id) => {
  const prevFavorites = [...favorites];
  const newFavorites = prevFavorites.filter((park) => park.id !== id);
  setFavorites(newFavorites, ...favorites);
};

 return (
  <Stack>
   <div className="favorites">
    {favorites.length > 0 ? (
     favorites.map((visit) => (
      <div key={visit.id} className="visit">
       <div>
        <h4>{visit.trailhead.name}</h4>
       </div>
       <div>
        <img className="img-fave" src={visit.image_url} alt="#" />
       </div>
       <div className='fave-delete-btn'>
        {favoritesList(visit.id) ? (
         <Button color="success" variant="contained" aria-label="delete" size="medium" onClick={() => removeFavorites(visit.id)}>Remove from Favorites
          <DeleteIcon className="remove-btn" /></Button>
        ) : (
         <Button color="success" variant="contained" aria-label="favorite" size="medium" onClick={() => addFavorites(visit)}>Add to Favorites<FavoriteBorderIcon className="favorite-btn" /></Button>
        )}
       </div>
      </div>
     ))
    ) : (
     <h1 className='favorites-h1'><center>No favorites found</center></h1>
    )}
    
   </div>
  </Stack>
 )
}