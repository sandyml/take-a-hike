import React from 'react';
import { useSelector } from 'react-redux';

import HomepageIntroCards from './HomepageIntroCards';
import HomePageDescription from './HomePageDescription';
import { HeaderNav } from '../navigation/HeaderNav';
import { MyVisitList } from '../pages/MyVisitList';
import Landing from './Landing';

export const HomePage = () => {

  const { currentUser } = useSelector((state) => state.usersReducer);

  return (
    <div>
      {
        currentUser && currentUser.id ?
          // !isLoading || currentUser && currentUser.id ?
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

