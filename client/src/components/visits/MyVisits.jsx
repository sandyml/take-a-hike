import React from 'react';
import { useSelector } from 'react-redux';
import VisitCard from '../hike/VisitCard';
import { Parallax } from 'react-parallax';

// import { mountain_image } from '../styles/LandingCSS';
import { backgroundImage } from '../../Global';

export const MyVisits = () => {
  const { visits } = useSelector((state) => state.usersReducer);
  console.log(visits, "visits Visits");

  const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

  return (
    <div>
      <center>
        <Parallax
          // style={mountain_image}
          bgImage={backgroundImage} >
          <h1>My Visits ONLY</h1>
          {myVisitCards}
        </Parallax>
      </center>
    </div>
  )
}
