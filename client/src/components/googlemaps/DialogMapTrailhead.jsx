import React, { useState } from "react";
import { useSelector } from "react-redux";

import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import { Check } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  imageSize: {
    // display: "inline-block",
    width: 411,
    height: 230
  }
});

export default function DialogMapTrailhead() {
  const classes = useStyles();

  const [showMap, setShowMap] = useState(false);

  const trailheads = useSelector((state) => state.trailheadsReducer);

  const toggleSeeMap = () => {
    (showMap === false) ? setShowMap(true) :
      setShowMap(false);
  };

  return (
    <div style={{ margin: 3 }}>
      <center>
        {trailheads.map((trh) =>
          <Card style={{ borderColor: "black", margin: 3, marginBottom: 7 }} key={trh.id} component={'div'} className={classes.root} variant="outlined">
            <CardActions component={'div'}>
              <Typography variant="body1" component="p">
              </Typography>
            </CardActions>
            <CardContent>
              <Typography
                // key={trh.id}
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {trh.name}
              </Typography>

              <Typography variant="h5" component="h2">
                <Button component={'div'} onClick={toggleSeeMap}>Map | Directions</Button>
                <>
                  {showMap ?
                    <div>
                      <iframe
                        src={trh.direction}
                        width="410" height="410"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="hike google maps"
                      >
                        Directions/GoogleMaps
                      </iframe>
                    </div>
                    : null}
                </>
              </Typography>

              <Typography variant="h5" component="h2">
                {(trh.hikes.map((th) =>
                  <img key={th} className={classes.imageSize} src={th.image_url} alt="hikes-images" />
                ))}
              </Typography>

              <Typography variant="body1" component={"div"}>
                <LocationOnTwoToneIcon style={{ color: "red", fontSize: "small" }} />  {trh.location}
              </Typography>

              <Typography variant="body2" component={"div"}>
                {(trh.difficulties.map((d) => d.name)).join(', ')}
                {/* {(trh.difficulties.map(d => d.name)).join(', ')} */}
              </Typography>
              {(trh.hikes.map(th =>
                <Typography variant="body2" component={"div"} key={th.id} className={classes.pos} color="textSecondary">
                  distance: {th.distance} &nbsp;
                  elevation gain: {th.elevation_gain}
                </Typography>
              ))}
              <hr />
              <Typography variant="body2" component={"div"}>
                {trh.amenities.map((tam) =>
                  <Typography
                    sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif' }}
                    variant='subtitle1' key={tam}><Check style={{ color: "green", fontSize: "small" }} />{tam}</Typography>
                )}<br />
                <hr />
              </Typography><br />
              <Typography variant="body2" component={"div"}>
                {trh.fees}
                <br />
              </Typography>
            </CardContent>
          </Card>

        )}
      </center>
    </div>
  );
}