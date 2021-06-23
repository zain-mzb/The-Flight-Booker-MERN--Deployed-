import Checkout from "./BookingForm/Checkout";
import userService from "../services/UserService";
import Login from './auth/Login';


const Book = (props) => {
  console.log("Props of Book");
  console.log(props);
    return (
      <>
         {userService.isLoggedIn() ? 
       <Checkout props={props} />
         : <Login /> } 
</>
     );
}
 
export default Book;