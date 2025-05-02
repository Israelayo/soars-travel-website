import "./Footer.css"
import footer from "./footer.png"



function Footer(){
    return <section>
        <div className="footer-container">
     
            <img className="footer-img" src={footer} alt="footer-img" />
            <h1 className="footer-h1">Travel with Us</h1>
            <div className="footer-content">
                <div className="first-content">
                    <h2 className="content1-h2">SOAR TRAVELS</h2>
                    <p className="content1-p">Soar Travels makes trip planning easy and exciting. Explore stunning destinations with seamless bookings.</p>

                </div>
                <div className="second-content">
                <h2 className="content2-h2">QUICK LINKS</h2>
                <ul>
                    <li>Home</li>
                    <li>FAQs</li>
                    <li>Destination</li>
                    <li>Travel Tips</li>
                    <li>Return Policy</li>
                    <li>Contact</li>
                    <li>Terms of Service</li>
                </ul>

                </div>
                <div className="third-content">
                <h2 className="content3-h2">STAY IN TOUCH</h2>
                <p className="content3-p">Subscribe to receive updates, access to exclusive details and more</p>
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>

                </div>




           
            </div>
            <div className="footer-bottom">
                <p className="footer-p">© 2025 Soar Travels. All rights reserved.</p>

            </div>
        </div>
    </section>
}

export default Footer