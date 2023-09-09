import { NavLink } from 'react-router-dom'

function Navbar() {

 return (
  <header>
  <h1 className="name">Arianne Pandini</h1>
  <nav>
    <ul>
      <li>
        <NavLink to="/">About Me</NavLink>
      </li>
      <li>
        <NavLink to="/Portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact Me</NavLink>
      </li>
      <li>
        < NavLink to="/Resume">Resume</NavLink>
      </li>
    </ul>
  </nav>
  </header>
 )
}

export default Navbar