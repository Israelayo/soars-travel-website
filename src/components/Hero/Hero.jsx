import "./Hero.css"
import image from "./image.png"
import Vector from "./Vector.png"
import MyDatepicker from "../Datepicker/Datepicker"
import NumberDropdown from "../Dropdown/Dropdown"

function Hero (){
    return <section className="hero">
        <img src={image} alt="travel-img"/>
        <div className="text-overlay">
        <h1>Search your next Holiday</h1>
        <h3>CHECK OUR BEST PROMOTIONS</h3>
        <div className="input-div">
        <input type="text" placeholder="Choose your Destination" />
        <button className="search-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button>
        </div>
        </div>
        <div className="hero-bottom">
            <div className="flights">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-airplane" viewBox="0 0 16 16">
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849m.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1s-.458.158-.678.599"/>
</svg> <p>Flights</p>
            </div>
            <div className="cruise">
                <img src={Vector} alt="cruise-img" />
             <p>Cruise</p>
            </div>
            <div className="bookings">
                <div className="bookings-container">
                <div className="booking-items">
                    <p>Flying from</p>                
                    <input type="text" placeholder="City or Airport"/>                  
                </div>
                <div className="booking-items">
                <p>To</p>                
                <input type="text" placeholder="City or Airport"/>    
                </div>
                <div className="booking-items">
                <p>Departing</p>                
                <MyDatepicker />
                </div>
                <div className="booking-items">
                <p>Returning</p>                
                <MyDatepicker />
                </div>
                <div className="booking-items">
                <p>Adult</p>                
                <NumberDropdown />
                </div>
                <div className="booking-items">
                <p>Child</p>                
                <NumberDropdown />
                </div>
                <div className="booking-items-button"><button>SEARCH</button></div>
                </div>
            </div>
        </div>
        
        
    </section>
}

export default Hero