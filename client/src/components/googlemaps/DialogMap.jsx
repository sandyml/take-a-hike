import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DialogMapTrailhead from "./DialogMapTrailhead";
import { GMaps } from "./GMaps";
import { HeaderNav } from "../navigation/HeaderNav";

import '.././index.css';

import { Grid } from "@material-ui/core";
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px"
  }
});

export const DialogMap = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openTrailhead, setOpenTrailhead] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div id='maps-form-header'>
        <HeaderNav />
      </div>
      <Button id='maps-form' variant="outlined" onClick={() => navigate('/')}>
        Go home
      </Button>&emsp;
      <Button id='maps-form' variant="outlined" onClick={() => setOpen(true)}>
        Slide in alert dialog
      </Button>&emsp;
      <Button id='trailhead-maps-form' label="Primary" onClick={() => setOpenTrailhead(true)}>
        Trailheads
      </Button>

      <div>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending anonymous
              location data to Google, even when no apps are running. <br /><br />

              Also, totally made up but using as an example. Latitude and longitude are not part of my project.
              Wanted to add something extra in the front-end/client-side.<br />
              <br />
              &emsp;-Sandra Yun
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}><CloseIcon fontSize='large' /></Button>
          </DialogActions>
        </Dialog>
      </div>

      <Grid component={'div'} container spacing={4} className={classes.gridContainer}>
        <div>
          <Grid component={'div'} item xs={12} sm={6} md={4}>
            <Dialog
              className='all-trailheads-map-scrollbar'
              open={openTrailhead}
              keepMounted
              onClose={() => setOpen(false)}
              align='left'
              component={'div'}
            >
              <DialogMapTrailhead />
              <Button onClick={() => setOpenTrailhead(false)}><CloseIcon fontSize='large' />close</Button>
            </Dialog>
          </Grid>
        </div>
        <div>
          <Grid component={'div'} className='gmaps-grid'>
            <GMaps />
          </Grid>
        </div>
      </Grid>
    </>
  );
}