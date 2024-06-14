import './Navigation.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({isActive}) => `${isActive && "active"}`} >
        Accueil
      </NavLink>

      <NavLink 
        to="/apropos"
        className={({isActive}) => `${isActive && "active"}`} >
        A propos
      </NavLink>
    </nav>
  )
}