import React from "react";
import SingleFlight from "./SingleFlight";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import GridList from '@material-ui/core/GridList';
import AddIcon from "@material-ui/icons/Add";
import flightService from "../../services/FlightsService";
import userService from "../../services/UserService";
import "./Flights.css"
import { Button } from "@material-ui/core";
import videoSource from '../../images/bgvideo.mp4';

// import '../../App.css';
import './title.css';
const useStyles = makeStyles(theme => ({
  root: {
      flexGrow: 1,
      padding: theme.spacing(2)
  }
}))


const Flights = (props) => {
 
  const [flights, setFlights] = React.useState([]);
  const classes = useStyles();

  const getData = () => {
    flightService
      .getFlights()
      .then((data) => {
        setFlights(data.flights);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  React.useEffect(getData,[]);
  
  const handleNewFlightClick = () => {
    console.log(props);
    props.history.push("/flights/new");
  };
  return (
    <div>
     

<div className="">
<div className=''>
<video autoplay="autoplay" muted loop="loop" className="myVideo">
  <source src={videoSource} type="video/mp4" />
</video>
</div>
<div className='titleb'>


<div class="patterns">

  <svg width="100%" height="120%" className=''>
    <defs>
      <pattern id="polka-dots" x="0" y="0"                    width="200" height="200"
               patternUnits="userSpaceOnUse">
        {/* <circle fill="#be9ddf" cx="65" cy="65" r="10"></circle>
        <circle fill="#be9ddf" cx="65" cy="65" r="10"></circle>
        <circle fill="#be9ddf" cx="65" cy="65" r="10"></circle> */}
      </pattern>  
        <style>
     {/* @import url("https://fonts.googleapis.com/css?  family=Lobster:400,400i,700,700i"); */}
     {/* @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap'); */}
     {/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap'); */}
     {/* @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap') ; */}
     @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');

   </style>
      
    </defs>
              
    <rect x="0" y="0" width="200%" height="200%" fill="url(#polka-dots)"> </rect>
    <rect x="0" y="0" width="200%" height="200%" fill="url(#polka-dots)"> </rect>
    <rect x="0" y="0" width="200%" height="200%" fill="url(#polka-dots)"> </rect>
 
   
 <text x="50%" y="40%"  text-anchor="middle"   className='special'>
  The Flight Booker 
 </text>
 
 
 
 <text x="50%" y="60%"  text-anchor="middle" style={{fontSize: '5rem'}}  className='special' >
Get Set Fly!
 </text>

 </svg>
 
</div>
</div>
</div>


      <div id="today" style={{textAlign:'center', fontSize:'3rem', color: '#8b95d2', marginTop:'30px', marginBottom:'30px'}}>Today's Available Flights</div> 
  
      {flights.length == 0 ? (
        <p>There are no flights</p>
      ) : (
        <div className={classes.root}>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
        >
      
      
          {flights.map((flight, index) => (
            <Grid item xs={12} sm={6} md={3} spacing={5} className="abc">
              <span className="abc">
            <SingleFlight key={index} flight={flight} history= {props.history} onDelete={getData}/>
            </span>
                
            </Grid>
          ))}
      

      </Grid>
        </div>
      
       
      )}
     </div>
    
  );
};

export default Flights;
