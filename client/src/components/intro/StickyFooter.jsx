import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
 return (
  <Typography variant="body2" color="text.secondary">
   {'Copyright © '}
   <Link color="inherit" href="https://github.com/sandyml/take-a-hike">
    Github
   </Link>{' '}
   {new Date().getFullYear()}
   {'.'}
  </Typography>
 );
}

export default function StickyFooter() {
 return (
  <Box
   sx={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '60vh',
   }}
  >
   <CssBaseline />
   <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
    <Typography style={{ fontFamily: 'Playfair Display, serif' }} variant="h2" component="h1" gutterBottom>
    Sandra Yun's Capstone | Phase-5 Project 
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
    {'I created a simple project from something that I enjoy doing - which is hiking. This project is designed with React Redux && Ruby on Rails.'}
    {'This application is about the top National Parks in the USA. Hikers can add visits to their page with the ability to update the date and delete it.'}
    </Typography>
    <Typography variant="body1"></Typography>
   </Container>
   <Box
    component="footer"
    sx={{
     py: 3,
     px: 2,
     mt: 'auto',
     backgroundColor: (theme) =>
      theme.palette.mode === 'light'
       ? theme.palette.grey[200]
       : theme.palette.grey[800],
    }}
   >
    <Container maxWidth="sm">
     <Typography variant="body1">
      Sandra Yun's Application
     </Typography>
     <Copyright />
    </Container>
   </Box>
  </Box>
 );
}