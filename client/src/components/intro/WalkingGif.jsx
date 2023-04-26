import React from 'react';
// import MountainsSvg from '././images/mountains.jpg';
import MountainsSvg from '../../assets/images/mountains.jpg';

export const WalkingGif = () => {
  return (
    <div sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '200%'
    }}>
     {/* <img src="https://media.tenor.com/25R0PjH9XuYAAAAC/moolang-cute.gif" alt="walking" className="src" /> */}
     <img src={MountainsSvg} alt="trees" className="src" sx={{ width: '100%' }} />
    </div>
  )
}
