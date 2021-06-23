import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import flightService from '../../services/FlightsService';
import ReviewCard from './ReviewCard';
const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const [name, setName] = React.useState("");
  const [flight_no, setFlight_no] = React.useState("");
  const [image_url, setImage_url] = React.useState("");
  const [logo, setLogo] = React.useState("");
  const [tagline, setTagline] = React.useState("");
  const [departure_time, setDeparture_time] = React.useState("");
  const [arrival_time, setArrival_time] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [arrival, setArrival] = React.useState("");

  const id = props.props.props.match.params.id;

  React.useEffect(() => {
    flightService.getSingleFlight(id).then((data) => {
      setName(data.name);
      setFlight_no(data.flight_no);
      setImage_url(data.image_url);
      setLogo(data.logo);
      setTagline(data.tagline);
      setDeparture_time(data.departure_time);
      setArrival_time(data.arrival_time);
      setFrom(data.from);
      setArrival(data.arrival);
      
    });
  }, []);

  console.log("Props of review");
  console.log(props);
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <div>You are booking a Flight with the following details:</div>
       {/* <h3>{name}</h3>
      <h3>{flight_no}</h3>
      <h3>{logo}</h3>
      <h3>{departure_time}</h3>
      <h3>{arrival_time}</h3>
      <h3>{from}</h3>
      <h3>{arrival}</h3>  */}
      <ReviewCard name={name} flight_no={flight_no} logo={logo} departure_time={departure_time} arrival_time={arrival_time} from= {from} arrival= {arrival}/>
    
    </React.Fragment>
  );
}