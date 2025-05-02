import "./Offer.css"
import Offerimg from "./image 27.png"
import Airplane from "./Airplane.png"
import Calendar from "./Calendaricon.png"
import Hotel from "./Hotelicon.png"


function Offer(){
    return <section className="offer-container">
        <div className="offer-imgdiv">
        <img src={Offerimg} alt="img" className="offer-img" />
        </div>
        <div className="offertext-content">
            <h3>Anse Source d'Argent</h3>
            <p>With its pink-tinged sands, crystal-clear waters, and iconic granite boulders, 
            Anse Source d'Argent is one of the world's most breathtaking beaches. A true tropical dream, perfect for swimming, snorkeling, and picture-perfect moments.</p>
            <div className="flex-rating">
                <div> 
                    <p><span>Rating:</span> ⭐ 4.7</p>
                </div>
                <div>
                    <p><span>Pricing:</span> $1000 for 5 days</p>
                </div>
                <div>
                    <p><span>Categories:</span> Luxury & Exclusive</p>
                </div>

            </div>

            <div className="bottomtext-container">
                <div className="bottomtext-item">
                    <img src={Hotel} alt="icon" className="bottomtext-icon"/>
                    <p> Best Hotels</p>
                </div>
                <div className="bottomtext-item">
                    <img src={Airplane} alt="icon" className="bottomtext-icon"/>
                    <p>Flights</p>
                </div>
                <div className="bottomtext-item">
                <img src={Calendar} alt="icon" className="bottomtext-icon"/>
                <p>Things To do</p>
                </div>
            </div>
        </div>
    </section>
}



export default Offer