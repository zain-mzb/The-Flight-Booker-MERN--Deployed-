import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Button } from "@material-ui/core";
import flightService from "../../services/FlightsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import Login from "../auth/Login";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./ContentModal.css";
import { Link } from "react-router-dom";
import Book from "../Book";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  media: {
    height: 200,
    width: 330,
    // margin:-10
  },
  btn2: {
    color: "green",
    textDecoration:"none"
  },
  action: {
    // display:"flex",
    justifyContent: "space-between",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    // backgroundColor: "#39445a",
    backgroundColor: "#ffffff",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "black",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
  bookbtn:{
    // textDecoration:"none",
    // color: "green",
    // backgroundColor:'green'
  }
}));

const SingleFlight = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { flight, onDelete, history } = props;
  console.log("props of single flight");
  console.log(props);
  return (
    <>
      <Card className={classes.root} style={{}}>
        <CardActionArea
          onClick={(event) => {
            handleOpen();
          }}
        >
          <CardMedia
            className={classes.media}
            image={flight.image_url}
            title=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             <b> {flight.name}</b>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
             <b>Flight No. {flight.flight_no}</b>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.action}>
          <Button size="small" color="primary" onClick={handleOpen} style={{backgroundColor:'#0288d1', color:'white'}}>
            Details
          </Button>
          <Button size="small" color="" className={classes.btn2} variant='contained'   style={{backgroundColor:'green', color:'white'}} onClick={(e) => {
                console.log("navigate to update");
                console.log(props);
               history.push("/book/" + flight._id);
              }}>
            {/* <Link to="/book" className={classes.bookbtn}> */}
            Book
            {/* </Link> */}
          </Button>
         
        </CardActions>
        {console.log("Admin Check")}
        {console.log(userService.isAdmin())}
        {userService.isAdmin() && (
          <>
        <CardActions className={classes.action}>
        <Button
               variant="contained"
              // color="green"
              style={{backgroundColor:'#ef6c00', color:'white'}}
              onClick={(e) => {
                console.log("navigate to update");
                console.log(props);
               history.push("/update/" + flight._id);
              }}
            >Update </Button>
           <Button
              variant="contained"
              style={{backgroundColor:'red', color:'white'}}
              onClick={(e) => {
                flightService
                  .deleteFlight(flight._id)
                  .then((data) => {
                    console.log(data);
                    onDelete();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
            >
              Delete
            </Button>
            </CardActions>
            </>
            )}
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="ContentModal">
              {/* <div className="time">
            <div>Departure Time: 0500 </div>
          <div>Arrival Time: 1100</div>    
              </div>  */}
              <div className="fill">
                <img
                  // src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg"
                  // src="https://www.aviatorcapital.com/wp-content/uploads/2019/09/CIFT-SATIR-DIKEY-TIRE.jpg"
                  // src="https://www.sunnyhainan.com/wp-content/uploads/2019/08/MIAT-Mongolian-Airlines.jpg"
                  // src="https://treknova.com/travel-advice/wp-content/uploads/2020/04/swissair-logo-png-transparent-1-1024x1024.png"
                  // src="https://i.pinimg.com/originals/79/2b/c9/792bc9f5ca882dd26d13bc5b0ac3337a.jpg"
                  // src="https://lh3.googleusercontent.com/proxy/0U_jZqXm0e7NJkdvRu1n2iRNu4TZLW5ESp9rBS27xV6yk8u8jz-JighSFgqh9O5ocfawGi8GgOSYq2lqNIDFLdHu3YhossNrjVVwMhskpqcKFb456VQAEiNGb16xkqHErt_xiw "
                  // src="https://brandslogo.net/wp-content/uploads/2014/07/malaysia_airlines_logo.png"

                  src={flight.logo}
                  // src={'../images/emirates.png'}
                  alt="airline logo"
                  className="ContentModal__portrait"
                />
              </div>

              {/* <div className="airport">
            <div>From: Lahore Airport </div>
          <div>To: Zurich Airport</div>    
              </div>  */}

              <div className="ContentModal__about">
                <span style={{marginTop:'25px'}} className="ContentModal__title">
                  {flight.name} - {flight.flight_no}
                  {/* ( */}
                  {/* {(
                  content.first_air_date ||
                  content.release_date ||
                  "-----"
                ).substring(0, 4)} */}
                  {/* ) */}
                </span>

                <i className="tagline" style={{marginTop:'10px', fontSize:'1.3rem'}}>{flight.tagline}</i>

                <span className="ContentModal__description">
                  <div className="time" style={{textAlign:''}}>

                    <div style={{color:'#3f51b5', padding:'20px', marginLeft:'-45px'}}>Scheduled Departure: <span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.departure_time}</i></span>   </div>
                
                    <span style={{color:'#3f51b5', padding:'20px', marginLeft:'-45px'}}>Scheduled Arrival: <span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.arrival_time}</i></span></span>
                    <div style={{padding:'20px', color:'#3f51b5', marginLeft:'-45px'}}>
                    Departure From:<span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.from}</i></span>
                </div>
                <div style={{ marginLeft:'-25px',color:'#3f51b5'}}>
                 Destination:<span style={{marginLeft:'15px',color: 'white', backgroundColor:'red', border: '3px black solid', padding: '3px'}}><i>{flight.arrival}</i></span>
                  </div>
                  </div>
                 
                  
                </span>

                {/* <div>
                <Carousel id={id} media_type={media_type} />
              </div> */}
                {/* 
                <Button
                  variant="contained"
                  startIcon={<YouTubeIcon />}
                  color="secondary"
                  target="__blank"
                  href="https://www.youtube.com/watch?v=JdOv2Qle4fM"
                >
                  Watch the Trailer
              </Button> */}
                <Button
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    backgroundColor: "#66bb6a",
                    marginBottom: "2rem",
                  }}
                  variant="contained"
                  onClick={(e) => {
                    console.log("navigate to update");
                    console.log(props);
                   history.push("/book/" + flight._id);}}
                  
                >
                  Book Now
                </Button>
           
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default SingleFlight;
// export default withRouter(SingleProduct);