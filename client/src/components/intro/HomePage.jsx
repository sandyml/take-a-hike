import React from 'react';
import { useSelector } from 'react-redux';

import HomepageIntroCards from './HomepageIntroCards';
import HomePageDescription from './HomePageDescription';
import { HeaderNav } from '../navigation/HeaderNav';
import { MyVisitList } from '../hike/MyVisitList';
import Landing from './Landing';

export const HomePage = ({ isLoading }) => {

  const { currentUser } = useSelector((state) => state.usersReducer);

  return (
    <div>
      {
        !isLoading || currentUser && currentUser.id ?
          <>
            <HeaderNav />
            <Landing />
            <HomepageIntroCards /><br />
            <HomePageDescription /><br />
            <MyVisitList />
          </>
          : null
      }
    </div>
  );
};

