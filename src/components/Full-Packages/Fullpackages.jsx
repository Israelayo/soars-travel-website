import "./Fullpackages.css" 
import Packagehero from "../../assets/Fullpckg.png"
import Offerimg from "../../assets/image 27.png"
import Airplane from "../../assets/Airplane.png"
import Calendar from "../../assets/Calendaricon.png"
import Hotel from "../../assets/Hotelicon.png"



function Fullpackages(){
    return (
    <>
    <section className="package-hero">
              <img src={Packagehero} alt="img" className="packagehero-img "/>
              <div className="packagetext-overlay">
                <h1>Discover your next destination</h1>
                <p>Find the perfect place for your next adventure</p>
                <div className="packagesearch-div">
        <input type="text" placeholder="Choose your Destination" />
        <span className="packagesearch-icon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg> </span>
<button className="packagesearch-btn">SEARCH</button>
        </div>
              </div>
    </section>


     <section className="packageflex-section">
      <div className="packageflex-container">
        <div className="packageflex-item">
          <p>All</p>
        </div>
        <div className="packageflex-item">
          <p>Cities</p>
        </div>
        <div className="packageflex-item">
          <p>Adventure</p>
        </div>
        <div className="packagebeach-item">
          <p>Beaches</p>
        </div>
        <div className="packageflex-item">
          <p>Luxury</p>
        </div>
        <div className="packageflex-item">
          <p>Nature</p>
        </div>
        <div className="packageflex-item">
          <p>Cultural</p>
        </div>
      </div>
    </section>


{new Array(5).fill(null).map((_, index) => (
  <>
    <section key={index} className="offer-container">
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
        <hr />
        </>

        ))}


</>
    );
}

export default Fullpackages