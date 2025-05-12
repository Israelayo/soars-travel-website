import "./Fulldestinations.css"
import Beachdest from "../../assets/Beachdest.png"
import Adventurespot from "../../assets/Adventurespot.png"
import Cities from "../../assets/Cities.png"
import Budget from "../../assets/Budget.png"
import Cultural from "../../assets/Cultural.png"
import Desert from "../../assets/Desert.png"
import Luxurydest from "../../assets/Luxurydest.png"
import Nature from "../../assets/Nature.png"
import Road from "../../assets/Road.png"
import Winter from "../../assets/Winter.png"


function Fulldestinations(){
    return <section className="destgrid-section">
        <div className="destinations-grid">
            <div className="destgrid-items">
                <img src={Beachdest} alt="img" />
                <div className="short-texts">
                    <p>Beaches</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Sun, Sand, and Serenity – Your Perfect Beach Escape</p>
            </div>


            <div className="destgrid-items">
                <img src={Cities} alt="img" />
                <div className="short-texts">
                    <p>Cities</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Explore the Heartbeat of the World’s Greatest Cities.</p>
            </div>




            <div className="destgrid-items">
                <img src={Adventurespot} alt="img" />
                <div className="short-texts">
                    <p>Adventure Spots</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Push Your Limits – The Ultimate Adrenaline Rush</p>
            </div>




            <div className="destgrid-items">
                <img src={Cultural} alt="img" />
                <div className="short-texts">
                    <p>Cultural Destinations</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Walk Through History, Live the Stories</p>
            </div>




            <div className="destgrid-items">
                <img src={Luxurydest} alt="img" />
                <div className="short-texts">
                    <p>Luxury Destinations</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Indulge in Elegance – Travel in Style</p>
            </div>




            <div className="destgrid-items">
                <img src={Budget} alt="img" />
                <div className="short-texts">
                    <p>Budget-Friendly Spots</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">See the World Without Breaking the Bank</p>
            </div>




            <div className="destgrid-items">
                <img src={Nature} alt="img" />
                <div className="short-texts">
                    <p>Nature & Wildlife</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Unlock the Wild – Explore Nature Like Never Before</p>
            </div>




            <div className="destgrid-items">
                <img src={Winter} alt="img" />
                <div className="short-texts">
                    <p>Winter Wonderland</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Frozen Beauty Awaits – Explore the Magic of Winter</p>
            </div>




            <div className="destgrid-items">
                <img src={Desert} alt="img" />
                <div className="short-texts">
                    <p>Desert Adventures</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Golden Sands, Endless Horizons</p>
            </div>




            <div className="destgrid-items">
                <img src={Road} alt="img" />
                <div className="short-texts">
                    <p>Road Trip Destinations</p>
                    <div className="right-text">
                    <p>View</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00CEC8" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
                    </div>
                    </div>
                    <p className="long-text">Hit the Road – Adventure Awaits</p>
            </div>
          
        </div>

    </section>
}

export default Fulldestinations