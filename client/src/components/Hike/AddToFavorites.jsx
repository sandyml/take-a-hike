import React from 'react'
import { useSelector } from 'react-redux'

const AddToFavorites = () => {

 // REVISITED

 const { visit } = useSelector((state) => state.visitsReducer)
 console.log(visit, "visited add to favorites")
  return (
    <div>
      
    </div>
  )
}

export default AddToFavorites
