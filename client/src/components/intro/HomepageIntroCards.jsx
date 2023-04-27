import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const images = [
 {
  url: "https://cdn.aarp.net/content/dam/aarp/travel/destinations/2020/09/1140-yosemite-hero.imgcache.rev.web.1400.804.jpg",
  title: 'My Visits',
  width: '31.5%',
  link: "/my-visits",
 },
 {
  url: "https://www.myutahparks.com/wp-content/uploads/2021/02/Zion-Watchman-swimmers_Tam19RichMartello_1600.jpg",
  title: 'All Trailheads',
  width: '31.5%',
  // width: '32.7%',
  link: "/all-trailheads",
 },
 // {
 //  url: "https://www.myutahparks.com/wp-content/uploads/2021/02/Zion-Watchman-swimmers_Tam19RichMartello_1600.jpg",
 //  title: 'All Trailheads',
 //  width: '31.5%',
 //  // width: '32.7%',
 //  link: "/trailheads",
 // },
 {
  url: "https://www.sftravel.com/sites/default/files/styles/hero/public/2022-11/yosemite-falls.webp?h=05d46cef&itok=3r7CsbMg",
  title: 'Hikers Visits',
  width: '31.5%',
  link: "/visits",
 },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
 position: 'relative',
 height: 200,
 [theme.breakpoints.down('sm')]: {
  width: '100% !important', // Overrides inline-style
  height: 100,
 },
 '&:hover, &.Mui-focusVisible': {
  zIndex: 1,
  '& .MuiTypography-root': {
   border: '4px solid currentColor',
  },
 },
}));

const ImageSrc = styled('span')({
 position: 'absolute',
 left: 0,
 right: 0,
 top: 0,
 bottom: 0,
 backgroundSize: 'cover',
 backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
 position: 'relative',
 left: 0,
 right: 0,
 top: 0,
 bottom: 0,
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
 position: 'absolute',
 left: 0,
 right: 0,
 top: 0,
 bottom: 0,
 backgroundColor: theme.palette.common.black,
 opacity: 0.1,
 transition: theme.transitions.create('opacity'),
}));

export default function HomepageIntroCards() {

 const navigate = useNavigate();

 return (
  <Box align='center' sx={{ marginLeft: 5.2, marginRight: 6.1,  display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
   {images.map((image) => (
    <ImageButton
     component={'div'}
     focusRipple
     key={image.title}
     style={{
      width: image.width,
     }}
    >
     <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
     <ImageBackdrop className="MuiImageBackdrop-root" />
     <Image>
      <Typography
       component="span"
       variant="subtitle1"
       color="inherit"
       sx={{
        position: 'relative',
        p: 4,
        pt: 2,
        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
       }}
      >
       <div variant="text" href={image.link} target="_parent" onClick={() => navigate(image.link)} >       
       <Button component={'button'} color='inherit' variant="text" style={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }} >{image.title}</Button>
       </div>
      </Typography>
     </Image>
    </ImageButton>
   ))}
  </Box>
 );
}
