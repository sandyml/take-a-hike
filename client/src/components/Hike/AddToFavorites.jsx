import React from 'react'
import { useSelector } from 'react-redux'

const AddToFavorites = () => {

 // REVISITED

 const { visited } = useSelector((state) => state.visitsReducer)
 console.log(visited, "visited add to favorites")
  return (
    <div>
      
    </div>
  )
}

export default AddToFavorites
