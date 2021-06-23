import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 33,
    paddingTop:7,
    paddingBottom:7,
    marginBottom: 30,
    // backgroundColor:'green'

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(5),
    flex: '1 0 auto',
    marginLeft: 20
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 220,
    marginLeft: 50,
    // backgroundColor:'blue',

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  timeSpan:{
    //   display: 'inline-block',
    // // backgroundColor:'blue',
    // width:200
  },
  tripSpan:{
// width:300,
// display: 'inline-block',
// // backgroundColor:'blue',
// marginLeft: -25,
// // paddingRight: 200
  }
}));

export default function MediaControlCard({name, flight_no, logo, from, arrival, departure_time, arrival_time}) {
    console.log("Props of review card");
    console.log(name, flight_no, logo);
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           {flight_no}
          </Typography>
        </CardContent>
        
       <span className={classes.tripSpan}>Route: <b>{from}</b> to <b>{arrival}</b></span>
      
        <span className={classes.timeSpan}>Time: <i>{departure_time}</i> to <i>{arrival_time}</i></span>
      
      
        
        
      </div>
     
        
        
      <CardMedia
        className={classes.cover}
        image={logo}
        title="Live from space album cover"
      />
    </Card>
  );
}