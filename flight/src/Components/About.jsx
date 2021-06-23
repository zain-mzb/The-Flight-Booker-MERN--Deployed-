import abtimg from '../images/a3.jpg'
import sideimg from '../images/a5.jpg'
import skytrax from '../images/skytrax.jpg'
import iata from '../images/iata.jpg'
import iso from '../images/iso.jpg'





import './About.css';


const About = () => {
    return ( 
        <>
        
            <img src={abtimg} alt="" className="imgcss" />
        
        <div className="title"><h1>About Us</h1></div>
        <div style={{fontSize:"5rem", marginLeft:'20px', color:'#8b95d2', textAlign:'center', marginTop:"30px", marginBottom:'60px'}}>How we started</div>
    <div style={{ padding:'-100%'}}>

    <div className='divabouttext' style={{}}><p id="yo" className="abouttext">Our Company first established its office in Lahore and started its operations from Lahore in 2008 with a motto of <span className="yo2">"Get Set Fly!"</span>. Which is the symbol of our mission to make flight booking easy and accessible for everyone. The Flight Booker enables people to book flights <span className="yo2">Quickly and Efficiently</span> without the hassle of Agents and Physical travel. Hence people can book their desire flights with just a few clicks at the comfort of their home. Because of our wonderful customers we have expanded to more than <span className="yo2">25 countries</span> covering 6 continents. So what are you waiting for fly today with <span className="yo2">"The Flight Booker"</span>. </p>   </div>
    <div style={{display:'inline-block', paddingBottom:'-180px', position: 'relative', top:'-15px', paddingTop: '-200px'}}><img src={sideimg} alt="" className="sideimg"/></div>
    </div>

<div style={{fontSize:"5rem", marginLeft:'20px', color:'#8b95d2', textAlign:'center', marginTop:"30px"}}>Our Achievements</div>
<div style={{fontSize:"2.5rem", marginLeft:'20px', color:'#85cc6f',fontStyle:'italic', textAlign:'center', marginTop:"30px", marginBottom:'20px'}}>Sky Trax Award   </div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img style={{height: '600px', width:'1015px'}} src={skytrax} alt="" /></div>
<div style={{fontSize:"2.5rem", marginLeft:'20px', color:'#8b95d2', color:'#85cc6f',fontStyle:'italic', textAlign:'center', marginTop:"30px", marginBottom:'20px'}}>IATA Certified Agency  </div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={iata} alt="" /></div>
<div style={{fontSize:"2.5rem", marginLeft:'20px', color:'#8b95d2', textAlign:'center', marginTop:"30px", marginBottom:'20px',color:'#85cc6f',fontStyle:'italic'}}>ISO:9001 Certification   </div>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={iso} alt="" /></div>








</>
        

     );
}
 
export default About;