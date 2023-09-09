import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';

import AboutMe from '../pages/AboutMe.jsx'; 
import Contact from '../pages/Contact.jsx';
import Portfolio from '../pages/Portfolio.jsx';
import Resume from '../pages/Resume.jsx';

function Header() {
  return (
    <> 
    <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={ <AboutMe/>} />
          <Route path='/Contact' element={ <Contact/>} />
          <Route path='/Portfolio' element={ <Portfolio/>} />
          <Route path='/Resume' element={ <Resume/>} />
        </Routes>
      </Router>
    </>
  )
}

export default Header;
