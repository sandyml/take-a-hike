import React from 'react';
import { Copyright } from '../copyright/Copyright';

const Logout = () => {
  return (
    <div>
      <><center><h1 className='etched-text '>You are not logged out!</h1></center></><br /><br />
      <img
        src="https://cdn.dribbble.com/users/1866560/screenshots/6208943/2019_tamarack-hotel_scene_v3-dribbble.gif"
        alt="happy hiking!"
        className=""
      />
      {/* <img 
      src="https://images.squarespace-cdn.com/content/v1/5c528d9e96d455e9608d4c63/1586379635937-DUGHB6LHU59QIVDH2QHZ/Hiker.gif?format=710w" 
      alt="happy hiking!" 
      className="bottomleft" 
      /> */}
      <Copyright />
    </div>
  )
}

export default Logout
