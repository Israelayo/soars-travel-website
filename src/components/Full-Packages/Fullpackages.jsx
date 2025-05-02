import "./Fullpackages.css" 
import Packagehero from "./Fullpckg.png"



function Fullpackages(){
    return <section className="package-hero">
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
}

export default Fullpackages