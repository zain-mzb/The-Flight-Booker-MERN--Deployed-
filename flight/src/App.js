
import './App.css';
import Header from './Components/Header';
import Flights from './Components/flights/Flights'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./Components/NotFound";
import Book from "./Components/Book";
import NewFlight from "./Components/flights/NewFlight";
import UpdateFlight from "./Components/flights/UpdateFlight";
import Footer from './Components/Footer'
// import emirates from './images/emirates.png';
import videoSource from './images/bgvideo.mp4';
import About from './Components/About';
import Contact from './Components/Contact-us'
// import './Components/Header.css';

function App() {

  return (
    
   
    <Router>
     
     
     <Header/>  

     <ToastContainer />


    
    
     <Switch>
     <Route path="/register" exact component={Register} />
     <Route path="/login" exact component={Login} />
     <Route path="/book/:id" exact component={Book} />
     <Route path="/newflight" exact component={NewFlight} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={Flights}  />
      <Route path="/contact-us" exact component={Contact} />
      <Route path ="/about" exact component={About} />
      <Route path="/update/:id" component={UpdateFlight} />
      <Redirect to="/not-found" />
       </Switch>
     <Footer/>
   
    </Router>
    
  );
}

export default App;
