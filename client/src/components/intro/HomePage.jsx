import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Parallax } from 'react-parallax';

import { sierraURL, sierra_image } from '../styles/LandingCSS';
import HomePageDescription from './HomePageDescription';
import { MyVisitGallery } from '../pages/MyVisitGallery';
import HomepageIntroCards from './HomepageIntroCards';
import { HeaderNav } from '../navigation/HeaderNav';
import HomePageBottom from './HomePageBottom';
import StickyFooter from './StickyFooter';
import Landing from './Landing';

import { Typography } from '@mui/material';

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
            bgImage={sierraURL}
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
          </Parallax>
      }
    </div>
  );
};

