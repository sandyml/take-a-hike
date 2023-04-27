import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, makeStyles, Typography} from "@material-ui/core";

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

  const bull = <span className={classes.bullet}>•</span>;

  // debugger
  const trailheads = useSelector((state) => state.trailheadsReducer);
  console.log(trailheads, "Trailheads");

  const toggleSeeMap = () => {
    (showMap === false) ? setShowMap(true) :
      setShowMap(false);
  };


  return (
    <div>
      <center>
        {trailheads.map((trh) =>
          <Card className={classes.root} variant="outlined">
            <CardActions>
              <Typography variant="body1" component="p">

                {/* <Button size="small">Add to my visits</Button> */}
              </Typography>
            </CardActions>
            <CardContent>
              <Typography
                key={trh.id}
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {trh.name}
              </Typography>

              <Typography variant="h5" component="h2">

              <Button onClick={toggleSeeMap}>Map | Directions</Button>
                      <>
                        {showMap ?
                          <div>
                            <iframe
                              src={trh.direction}
                              width="600" height="450"
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
                {(trh.hikes.map(th =>
                  <img className={classes.imageSize} src={th.image_url} alt="hikes-images" />
                ))}
              </Typography>

              <Typography variant="body1" component="p">
                {trh.location}
              </Typography>

              <Typography variant="body2" component="p">
                {(trh.difficulties.map(d => d.name)).join(', ')}
              </Typography>
              {(trh.hikes.map(th =>
                <Typography variant="body2" component="p" key={trh.id} className={classes.pos} color="textSecondary">
                  distance: {th.distance}
                  elevation gain: {th.elevation_gain}
                </Typography>
              ))}
              <Typography variant="body2" component="p">
                {trh.amenities}<br />
              </Typography>
              <Typography variant="body2" component="p">
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