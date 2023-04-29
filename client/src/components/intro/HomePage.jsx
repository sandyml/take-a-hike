import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import Landing from './Landing';

import HomepageIntroCards from './HomePageIntroCards';
import HomePageDescription from './HomePageDescription';
import { HeaderNav } from '../navigation/HeaderNav';
import { MyVisitList } from '../pages/MyVisitList';
import { sierra_image } from '../styles/LandingCSS';

import { Typography } from '@mui/material';

export const HomePage = () => {

  const { currentUser } = useSelector((state) => state.usersReducer);

  return (
    <div>

      {
        currentUser && currentUser.id ?
          <>
            <HeaderNav />
            <Landing />
            <HomepageIntroCards /><br />
            <HomePageDescription /><br />
            <MyVisitList />
          </>
          :
          <Parallax
            style={sierra_image}
            display="flex"
            bgImage="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            strength={300}
          >
            <Typography 
            style={{ fontSize: 20, margin: 200, color: 'black' }} 
            component={'div'} 
            align='center'
            >
            Not Authorized to see this Webpage. 
            Please <NavLink to='/signup'>signup</NavLink> or <NavLink to='/login'>login</NavLink>
            </Typography>
          </Parallax>



      }
    </div>
  );
};

