import userService from "../../services/UserService";
import { toast } from "react-toastify";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FlightTakeoffTwoToneIcon from '@material-ui/icons/FlightTakeoffTwoTone';
import regpic from '../../images/register.jpg'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        The Flight Booker
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
    `url(${regpic})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    height: 60,
    width:60
    
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  iconsize:{
    fontSize: 40,
    
  }
}));

const Register = (props) => {
  console.log("inside registration");
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}  style={{backgroundColor:'#8b95d2'}}>
            <FlightTakeoffTwoToneIcon className={classes.iconsize}/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
      

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <Button
              
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{backgroundColor:'#8b95d2'}}
              onClick={(e) => {
                userService
                  .register(name, email, password)
                  .then((data) => {
                    console.log(data);
                    console.log("registration successful");
                    props.history.push("/login");
                    window.location.href = "/login";
                    
                  })
                  .catch((err) => {
                    console.log(err);
                    console.log("registration error");
                    
                    toast.error(err.response.data, {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  });
                 
              }}
            >
              Register
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
