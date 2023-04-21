export const styles = (theme) => ({
 mainFeaturedPost: {
  backgroundImage: 'url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)',
  backgroundColor: theme.palette.grey[800],
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '70% 50%',
  backgroundSize: 'cover',
  position: 'relative',
  paddingBottom: 150,
  // marginBottom: 20,
  paddingTop: 290,
  paddingLeft: 50,
  marginRight: 40,
  marginLeft: 42,
  height: "88vh"
 },
 overlay: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,.2)',
  height: "100vh"
 },
 main: {
  position: 'relative',
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(6),
   paddingRight: 0,
  },
 },

 title: {
  fontSize: 200,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(6),
   paddingRight: 40,
   paddingTop: 250
  },

 },

 title2: {
  fontSize: 100,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(1),
   paddingRight: 40,
   paddingTop: 250
  },

 },

 title3: {
  fontSize: 50,
  textAlign: "center",
  color: "white",
  padding: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
   padding: theme.spacing(1),
   paddingRight: 40,
   paddingTop: 250
  },

 },

 subtitle: {
  fontSize: 45,
  fontFamily: "Barlow Condensed",
  color: "white",
  paddingLeft: 60,
  letterSpacing: "3px",
  lineHeight: "1.5"
 },

});

export const mountain_image = {
 backgroundImage: 'url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80)',
 backgroundRepeat: 'no-repeat',
 backgroundPosition: '60% 40%',
 backgroundSize: 'cover',
 position: 'relative',
 borderRadius: "4px",
 marginBottom: 20,
 marginRight: 40,
 marginLeft: 42,
 height: "88vh",
}

export const walking_gif = {
 backgroundImage: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2I5NTBjOTcxMmQxNDQwMjVmMTg1MDI3ZTBkZTQ3MTNiYTUzZTRmZCZjdD1z/kd8ynEx9HxlW5gVqg8/giphy.gif",
 backgroundRepeat: 'no-repeat',
 backgroundPosition: '60% 40%',
 backgroundSize: 'cover',
 position: 'relative',
 borderRadius: "4px",
 marginBottom: 20,
 marginRight: 40,
 marginLeft: 42,
 height: "2vh",
}

export const cartoon_bear_gif = {
 backgroundImage: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU1MGMyYjJlYzU5MDA4MjQwNTI3OWMzYmEwZmQ3M2M2NDZiMjdhMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/y3dZQEKkbOwJPSSApQ/giphy.gif",
 backgroundSize: 'small',
 position: 'relative',
 borderRadius: "4px",
 marginBottom: 20,
 marginRight: 40,
 marginLeft: 42,
 height: "2vh",
}