// import React from 'react';
// import { useDispatch } from 'react-redux';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { ThemeProvider } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';

// // TODO: Add useEffect auth 

// const AddForm = () => {

//  const navigate = useNavigate();
//  const dispatch = useDispatch();

//  const handleSubmit = (e) => {
//   e.preventDefault();
//   dispatch(addVisit(visited_date, trailhead_id, navigate, setErrors));
//  }

//  return (
//   <ThemeProvider theme={theme}>
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Avatar sx={{ m: 1, bgcolor: 'lightersage.main' }}>
//           {/* <LockOutlinedIcon /> */}
//         </Avatar>
//         <Typography component="h1" variant="h5">
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 color="neutral"
//                 autoComplete="given-name"
//                 name="Username"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="Username"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 color="neutral"
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 // value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 color="neutral"
//                 name="password"
//                 label="Password"
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 autoComplete="new-password"
//                 // value={password}
//                 // onChange={(e) => setPassword(e.target.value)}
//               />
//             </Grid>
//             {/* TODO: Show password  */}
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={<Checkbox value="allowExtraEmails" color="primary" onClick={togglePassword} />}
//                 label="Show Password"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="neutral"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//           {errors.length > 0 && (
//               <ul style={{ color: "red" }}>
//                 {errors.map((error, index) => (
//                   <li key={index}>{error}</li>
//                 ))}
//               </ul>
//             )}
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Link href="/signup" variant="body2">
//                 Don't have an account? Signup
//               </Link>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   </ThemeProvider>
// );
// };

// export default AddForm;
