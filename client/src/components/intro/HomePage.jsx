import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import HomepageIntroCards from './HomepageIntroCards';
import HomePageDescription from './HomePageDescription';
import { HeaderNav } from '../navigation/HeaderNav';
import { MyVisitList } from '../hike/MyVisitList';
import Landing from './Landing';

export const HomePage = ({ isLoading }) => {

 const { loggedIn, currentUser } = useSelector((state) => state.usersReducer);

 const navigate = useNavigate();

//  useEffect(() => {
//   if(!isLoading && !loggedIn) {
//    navigate('/login')
//   }
//   // eslint-disable-next-line
//  }, [isLoading, loggedIn]);

  return (
    <div>
      {
        currentUser && currentUser.id ?
        <>
        <HeaderNav />
        <Landing />
        <HomepageIntroCards /><br/>
        <HomePageDescription /><br/>
        <MyVisitList />
        </>
      : null
       }
      </div>
   );
  }

