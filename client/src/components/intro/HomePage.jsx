import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import Landing from './Landing';

import HomepageIntroCards from './HomePageIntroCards';
import HomePageDescription from './HomePageDescription';
import { HeaderNav } from '../navigation/HeaderNav';
import { MyVisitGallery } from '../pages/MyVisitGallery';
import { sierra_image } from '../styles/LandingCSS';

import { Typography } from '@mui/material';
// import { Copyright } from '../pages/MyVisits';
import HomePageBottom from './HomePageBottom';
import StickyFooter from './StickyFooter';

export const HomePage = () => {

  const { currentUser } = useSelector((state) => state.usersReducer);

  return (
    <div>

      {
        currentUser && currentUser.id ?
          <>
            <HeaderNav />
            <Landing /><br />
            <HomepageIntroCards /><br />
            <HomePageDescription /><br />
            <MyVisitGallery />
            <HomePageBottom />
            <StickyFooter />
          </>
          :
          <Parallax
            blur={2}
            style={sierra_image}
            bgImage="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            strength={300}
          >
            <Typography
              style={{
                fontSize: 90,
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: 0,
                fontWeight: 100
              }}
              variant="h3"
              component="h2"
              gutterBottom>
              Not Authorized to see this Webpage.
              Please <NavLink to='/signup' id='homepage-hover'>
                signup</NavLink> or
              <NavLink
                to='/login' id='homepage-hover'>&nbsp;login</NavLink>
            </Typography>
            {/* <Copyright /> */}
          </Parallax>
      }
    </div>
  );
};

