import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export const TermsPolicy = () => {
   return (
      <div><br /><center>
         <Typography variant="h3">
            Terms and Conditions of Use<br />
         </Typography>
         <Typography variant="h5">
            All Pretend<br />
         </Typography>
         <Typography variant="body1">
            By using this RAILS fake website, you (pretend) agree to the following terms, conditions and privacy policy.
            <br />
         </Typography>
         <br />
         <Typography variant="body1" >
            General Provisions
         </Typography>

         <Typography variant="body1">

            Thsi website is owned and operated by Sandra Yun TRAILS, a New York company. Our principal place of business is located at 2222 Waverly Place, Pretent St, New York, New York 88888.
            You must be at least eighteen years of age to use our website. Use of this website is at your own risk. We host our site on a reputable platform and take reasonable efforts to maintain and host the site. However, we make no explicit representations or warranties as to the safety or vour individual use of the website. The terms, conditions and privacy policy contained on this page is subject to change at any time.
         </Typography>
         <br />
         <Typography variant="body2">

            Intellectual Property Notice
         </Typography>

         <Typography variant="body1">

            All images, text, designs, graphics, trademarks and service marks are owned by and property of Sandra Yun TRAILS, or the properly attributed party. It is a violation of federal law to use any of our intellectual property in whole or in part, and modification of any materials contained on this site is illegal and may be prosecuted to the fullest extent permissible should we choose to do so, including asking for financial penalties (damages) and/or an injunction forcing you to stop using our intellectual property immediately.
         </Typography>
         <br />
         <Typography variant="body2">

            Choose between (1) or (2);
         </Typography>

         <Typography variant="body1">

            (1) You may use our intellectual property with clear and obvious credit back to our site, as well links back to the page where the materials, designs, images, text, quote or post is located when it is appropriate to do so. However, you may never claim any of our intellectual property as your
            own or your unique creation, even with attribution.
         </Typography>
         <br />

         <Typography variant="body1">

            (2) You may NOT use our intellectual property in any way, which includes republishing any text, image, design or other property on another website, or posting a quote or image from our site to any third party website including social media. We have spent lots of time and money building the intellectual property located on this site and in order to maintain the integrity of it, we cannot allow any third party use.
         </Typography>
         <br /><br />
         <Typography variant="body4">

            <Link color='variant' to="/signup">&nbsp; <h5>If Agree, please return to signup (click here)</h5></Link>
         </Typography>
      </center>
      </div>
   )
}