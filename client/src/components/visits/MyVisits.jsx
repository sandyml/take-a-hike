import React from 'react';
import { useSelector } from 'react-redux';
import VisitCard from '../hike/VisitCard';
import { Parallax } from 'react-parallax';

import { mountain_image } from '../styles/LandingCSS';

export const MyVisits = () => {
 const { visits } = useSelector((state) => state.usersReducer);
 console.log(visits, "visits Visits");

 const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit}/> )

  return (
    <div>
     <center>
     <h1>My Visits ONLY</h1>
      <Parallax
        style={mountain_image}
        bgImage="https://rare-gallery.com/uploads/posts/5395286-cloud-mountain-winter-summit-snowcap-pastel-forest-snow-pink-rock-tree-outdoor-alp-sky-hiking-altitude-mountaineering-season-clear-resort-creative-commons-images.jpg"
        strength={680}
      >
     {myVisitCards}
      </Parallax>
     </center>
     </div>
  )
}
