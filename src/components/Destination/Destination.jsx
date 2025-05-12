import "./Destination.css"
import Dubai from "../../assets/Dubai.png"
import NewYork from "../../assets/NewYork.png"
import Italy from "../../assets/Italy.png"
import Egypt from "../../assets/Egypt.png"
import UK from "../../assets/UK.png"
import Australia from "../../assets/Australia.png"
import Brazil from "../../assets/Brazil.png"
import Packages from "../../assets/Packages.png"

function Destination(){
    return <section>
        <div className="our-destinations">
            <h1 className="title">OUR DESTINATIONS</h1>
            <div className="destination-container">

                <div className="destination-items">
                    <img src={Dubai} alt="Dubai-img" />
                    <div className="text">
                        <h3>DUBAI</h3>
                        <p>4 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={NewYork} alt="NewYork-img"/>
                    <div className="text">
                        <h3>USA</h3>
                        <p>2 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={Italy} alt="Italy-img"/>
                    <div className="text">
                        <h3>ITALY</h3>
                        <p>4 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={Egypt} alt="Egypt-img"/>
                    <div className="text">
                        <h3>EGYPT</h3>
                        <p>2 packages</p>
                    </div>
                </div>
          
                <div className="destination-items">
                <img src={UK} alt="UK-img"/>
                    <div className="text">
                        <h3>UK</h3>
                        <p>2 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={Australia} alt="Australia-img"/>
                    <div className="text">
                        <h3>AUSTRALIA</h3>
                        <p>4 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={Brazil} alt="Brazil-img"/>
                    <div className="text">
                        <h3>BRAZIL</h3>
                        <p>2 packages</p>
                    </div>
                </div>

                <div className="destination-items">
                <img src={Packages} alt="Other Packages-img" className="packages"/>
                    <div className="text">
                        <button className="view-package">VIEW ALL PACKAGES</button>
                    </div>
                </div>
          </div>
        </div>
    </section>
}

export default Destination