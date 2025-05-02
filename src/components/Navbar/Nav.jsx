import { Link } from "react-router-dom";
import "./Nav.css"

function Nav(){
    return <nav>
      <div className="Navbar">
    <h1>SOAR TRAVELS</h1>
    <div className="Navlinks">
    <Link className="link" to='/'>HOME</Link>
    <Link className="link" to='/destinations'>DESTINATIONS</Link>
    <Link className="link" to='/packages'>PACKAGES</Link>
    <Link className="link" to='/contact'>CONTACT</Link>
    {/* <Link className="link" to='/blog'>BLOG</Link> */}
    </div>
    <button className="nav-button">BOOK NOW</button>

    </div>
  </nav>
}

export default Nav