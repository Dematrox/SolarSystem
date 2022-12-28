import { Link, NavLink } from "react-router-dom";
import logo from './logo.svg'

export const NavBar = () => {
  return (
    <>  
    <div className="div-nav-bar">
        <Link to='/'><img src={logo} className="App-logo" alt="logo" /></Link>
        <div className="div-nav">
            <div className="nav-bar">
                <NavLink className={({isActive}) => `nav-bar-link ${ isActive ? 'active' : ''}`} to="/planets">Planets</NavLink>
                <NavLink className={({isActive}) => `nav-bar-link ${ isActive ? 'active' : ''}`} to="/satellites">Moons</NavLink>
                <NavLink className={({isActive}) => `nav-bar-link ${ isActive ? 'active' : ''}`} to="/otro">More</NavLink>
            </div>
        </div>  
    </div>
    </>
  )
}
