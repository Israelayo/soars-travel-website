import "./Package.css";
import packageItems from "./packagearray";
import location from "./location-marker.png";

function Package() {
  return (
    <section>
      <div className="package-container">
        <h1 className="package-text">OUR PACKAGES</h1>
        <div className="our-packages">
          {packageItems.map((packages,key) => (
             <div className="package-item" key={key}>
             <img src={packages.image} alt="img" />
             <div className="item-overlay">
               <div className="pricing-container">
                 <div>
                   <h3>{packages.name}</h3>
 
                   <img src={location} alt="location-svg" />
                   <p className="uae">{packages.city}</p>
                 </div>
                 <p className="price">{packages.price}</p>
               </div>
 
               <div className="luxury-container">
                 <div className="luxury-item">
                   <p>{packages.enjoy}</p>
                 </div>
                 <div className="luxury-item">
                   <p>{packages.enjoy2}</p>
                 </div>
               </div>
               <p className="luxury-p">
                 {packages.detail}
               </p>
               <button className="detail-btn">DETAILS</button>
             </div>
           </div>

          ))}
          
         

          {/* <div className="package-item">
            <img src={Venice} alt="Venice-package" />
            <div className="item-overlay">
              <div className="pricing-container">
                <div>
                  <h3>VENICE</h3>

                  <img src={location} alt="location-svg" />
                  <p className="uae">ITALY</p>
                </div>
                <p className="price">$850</p>
              </div>

              <div className="luxury-container">
                <div className="luxury-item">
                  <p>Rides</p>
                </div>
                <div className="luxury-item">
                  <p>Landmark</p>
                </div>
              </div>
              <p className="luxury-p">
              Romantic canals, historic charm, timeless beauty.
              </p>
              <button>DETAILS</button>
            </div>
          </div>

          <div className="package-item">
            <img src={Santorini} alt="Santorini-package" />
            <div className="item-overlay">
              <div className="pricing-container">
                <div>
                  <h3>SANTORINI</h3>

                  <img src={location} alt="location-svg" />
                  <p className="uae">GREECE</p>
                </div>
                <p className="price">$1200</p>
              </div>

              <div className="luxury-container">
                <div className="luxury-item">
                  <p>Luxury</p>
                </div>
                <div className="luxury-item">
                  <p>History</p>
                </div>
              </div>
              <p className="luxury-p">
              Breathtaking sunsets, white-washed homes, crystal waters
              </p>
              <button>DETAILS</button>
            </div>
          </div>

          <div className="package-item">
            <img src={Capetown} alt="Cape Town-package" />
            <div className="item-overlay">
              <div className="pricing-container">
                <div>
                  <h3>CAPE TOWN</h3>

                  <img src={location} alt="location-svg" />
                  <p className="uae">SOUTH AFRICA</p>
                </div>
                <p className="price">$750</p>
              </div>

              <div className="luxury-container">
                <div className="luxury-item">
                  <p>Mountains</p>
                </div>
                <div className="luxury-item">
                  <p>Beaches</p>
                </div>
              </div>
              <p className="luxury-p">
              Stunning mountains, vibrant culture, scenic beaches.
              </p>
              <button>DETAILS</button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Package;
