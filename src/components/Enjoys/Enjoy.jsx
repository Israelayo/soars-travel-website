import "./Enjoy.css";
import Worldtour from "../../assets/worldtour.png"
import Train from "../../assets/Train.png"
import Cruise from "../../assets/Cruise.png"


function Beachitems(){
    return <section className="Beachitems-container">
        <div className="beach-bottom">
    <div className="beach-item">
      <img src={Worldtour} alt="world-tour img" />
      <div className="worldtour-paragraph">
      <h4>WORLD TOUR</h4>
      <p>Explore the world's most iconic destinations and unforgettable experiences with our expertly curated world tours</p>
      </div>
    </div>
    
    <div className="beach-item">
      <img src={Cruise} alt="cruise img" />
      <div className="worldtour-paragraph">
      <h4>CRUISES</h4>
      <p>Set sail for adventure and unforgettable ocean views</p>
      </div>
    </div>
    
    <div className="beach-item">
      <img src={Train} alt="Train img" />
      <div className="worldtour-paragraph">
      <h4>BEST TOUR</h4>
      <p>Go on unforgettable tours, packed with adventure and discovery</p>
      </div>
    </div>
    </div>
    </section> 
}

export default Beachitems




