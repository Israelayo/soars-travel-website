import './App.css'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home page/Home'
import Packages from './pages/Packages Page/Packages'
import Destinations from './pages/Destinations Page/Destinations'
import Contact from './pages/Contact Page/Contact'
// import Blog from './pages/Blog Page/Blog'
import Nav from './components/Navbar/Nav'
import Footer from './components/Footer/Footer'

function App(){
  return <div>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/packages' element= {<Packages />}/>
      <Route path='/destinations' element= {<Destinations />}/>
      <Route path='/contact' element= {<Contact />}/>
      {/* <Route path='/blog' element= {<Blog />}/> */}
    </Routes> 
    <Footer />
    </BrowserRouter>
  </div>
}

export default App