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
     favorites.map((park) => (
      <div key={park.id} className="park">
       <div>
        <h4>{park.title}</h4>
       </div>
       <div>
        <img className="img-fave" src={park.image_url} alt="#" />
       </div>
       <div className='fave-delete-btn'>
        {favoritesList(park.id) ? (
         <Button color="success" variant="contained" aria-label="delete" size="medium" onClick={() => removeFavorites(park.id)}>Remove from Favorites
          <DeleteIcon className="remove-btn" /></Button>
        ) : (
         <Button color="success" variant="contained" aria-label="favorite" size="medium" onClick={() => addFavorites(park)}>Add to Favorites<FavoriteBorderIcon className="favorite-btn" /></Button>
        )}
       </div>
      </div>
     ))
    ) : (
     <h1 className='favorites-h1'>No favorites found</h1>
    )}
   </div>
  </Stack>
 )
}