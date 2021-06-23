import './Contact-us.css'
import cntkimg from '../images/c1.jpg';

import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';   
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    clickableIcon: {
      color: '#626ca9',
      fontSize:'5rem',
      '&:hover': {
      color: 'green',
      },
    },
  }));


const Contact = () => {
    const classes = useStyles();    

    return ( 
    <>
    
    <img src={cntkimg} className="imgcss"  alt="" />
    <div className="title"><h1>Contact Us</h1></div>
    <div style={{fontSize:"4rem", marginLeft:'20px', color:'#8b95d2', textAlign:'center', marginTop:"30px", marginBottom:'0px'}}>Need help?...We got your back!</div>
    <p className="yo" style={{padding:'70px', fontSize:'2.4rem', textAlign:'center'}}>We take pride in our excellent customer services that are available round the clock <span className="yo2">24/7</span>. According to our track records we have a complaint resolution rate of <span className="yo2">97%</span>. So if you have any query or complaint just contact us via following channels and we'll get back to you in no time. Promise!
   
    </p>
    <div style={{fontSize:"4rem", marginLeft:'20px', color:'#85cc6f', textAlign:'center', marginTop:"-5 0px", marginBottom:'40px', fontStyle:'bold'}}>Reach us quickly by the following channels</div>

  
        {/* <div style={{height:'500px', width:'100%', backgroundColor:'#c0c9ff '}}>


        </div> */}
    {/* <div style={{marginLeft:'3rem'}}><span style={{marginLeft:'', fontSize:'2.3rem'}}>Email:</span><span style={{marginLeft:'', fontSize:'1.6rem'}}>     support@flightbooker.com</span></div> */}
    <div style={{display: 'flex', justifyContent:'space-evenly', marginBottom:'40px' }}>
    <EmailIcon  onClick={event =>  window.location.href='https://gmail.com'} className={classes.clickableIcon}/>
 <FacebookIcon  className={classes.clickableIcon} onClick={event =>  window.location.href='https://fb.com'}  />
 <TwitterIcon className={classes.clickableIcon}  onClick={event =>  window.location.href='https://twitter.com'}/>
 <WhatsAppIcon className={classes.clickableIcon} onClick={event =>  window.location.href='https://whatsapp.com'} />
 <InstagramIcon className={classes.clickableIcon} onClick={event =>  window.location.href='https://instagram.com'} />
 </div>


    </>
    );
}
 
export default Contact;