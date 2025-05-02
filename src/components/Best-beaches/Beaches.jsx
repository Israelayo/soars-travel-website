import "./Beaches.css";
import Beach from "./Beach.png"


function Beaches() {
  return (
    <section>
      <div className="beach-container">
        <div className="best-beaches">
          <h1>THE BEST BEACHES</h1>
          
           <p className="paragraph1">Escape to the world’s most breathtaking beaches, where golden sands
            meet crystal-clear waters. 
            </p> 
            <br />
           <p className="paragraph2">Whether you seek relaxation, adventure,
            or stunning sunsets, these coastal paradises offer the perfect
            getaway. 
            </p>
            <br />
            <p className="paragraph3">
            Discover the best beach destinations and plan your dream
            seaside escape today!
            </p>
          
          <p className="pricing"><span className="eight">800</span> <span className="five">500 $ </span>/PER PERSON </p>
          <button>BOOK NOW</button>
        </div>
        <div className="beach-img"> 
            <img src={Beach} alt="beach-img" />
        </div> 
      </div>
    </section>
  );
}

export default Beaches;
