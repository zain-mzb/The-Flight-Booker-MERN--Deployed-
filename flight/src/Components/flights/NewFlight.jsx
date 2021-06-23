import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import flightService from "../../../src/services/FlightsService";
import Auth from "../auth/Auth";

const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [flight_no, setFlight_no] = React.useState("");
  const [image_url, setImage_url] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [departure_time, setDeparture_time] = React.useState("");
  const [arrival_time, setArrival_time] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [arrival, setArrival] = React.useState("");
 
  return (
    <Auth>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div style={{fontSize:"3rem", textAlign:'center', marginTop:'25px', fontStyle:"bold"}}>Add New Flight</div> 
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6} style={{border: '4px solid #6e78b5', padding:'50px', backgroundColor:'#c8cdf1' }}>
          <TextField
          
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Flight No."
            fullWidth
            value={flight_no}
            onChange={(e) => {
              setFlight_no(e.target.value);
            }}
          />
          {/* {console.log("consoling name")}
          {console.log({name})} */}
          <TextField
          style={{marginTop:'7px'}}
            label="Image"
            fullWidth
            value={image_url}
            onChange={(e) => {
              setImage_url(e.target.value);
            }}
          />
            {/* {console.log("consoling image")}
          {console.log({image})} */}
          <TextField
          style={{marginTop:'7px'}}
            label="Logo"
            fullWidth
            value={logo}
            onChange={(e) => {
              setLogo(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Tagline"
            fullWidth
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Depaparture Time"
            fullWidth
            value={departure_time}
            onChange={(e) => {
              setDeparture_time(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Arrival Time"
            fullWidth
            value={arrival_time}
            onChange={(e) => {
              setArrival_time(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Departure Airport"
            fullWidth
            value={from}
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          />
          <TextField
          style={{marginTop:'7px'}}
            label="Arrival Airport"
            fullWidth
            value={arrival}
            onChange={(e) => {
              setArrival(e.target.value);
            }}
          />
        
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9} >
          <Button
          style={{marginLeft:'270px', backgroundColor:'#6e78b5', fontStyle:'bold', color: 'white', marginBottom:'30px', marginTop:'10px'}}
            variant="contained"
            
            onClick={(e) => {
              flightService
                .addFlight({ name, flight_no, image_url, logo, tagline, departure_time, arrival_time, from, arrival })
                .then((data) => {
                  console.log("Consoling New FLight data")
                  console.log(data);
                  props.history.push("/");
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            Add New
          </Button>
        </Grid>
      </Grid>
    </Auth>
  );
};

export default NewProduct;
