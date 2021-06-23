import './Footer.css';
import './Icons.css';


const footer = () => {
    return ( 
        <>
        
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>The Flight<span>Booker</span></h3>

				<p class="footer-links">
					<a href="#">Home</a>
					
					<a style={{marginLeft: "7px"}} href="#">Blog</a>
				
					<a style={{marginLeft: "7px"}} href="#">Pricing</a>
				
					<a style={{marginLeft: "7px"}} href="#">About</a>
					
					<a style={{marginLeft: "7px"}} href="#">Faq</a>
					
					<a style={{marginLeft: "7px"}} href="#">Contact</a>
				</p>

				<p class="footer-company-name">Company Name © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>25- Marine drive</span> Karachi, Pakistan</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+04235479121-29</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a style={{color: "black"}} className="mailto" href="mailto:support@company.com">support@flightbooker.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					The Flight Booker is a private limited company dedicated to the satisfaction of our loyal customers. Get Set Fly!
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i></a>
					<a href="#"><i class="fa fa-twitter"></i></a>
					<a href="#"><i class="fa fa-linkedin"></i></a>
					<a href="#"><i class="fa fa-github"></i></a>

				</div>

			</div>

		</footer>
        </>
     );
}
 
export default footer;