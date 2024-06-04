import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink 
        to="/"
        className={({isActive}) => `${isActive && "active"}`} >
        Accueil
      </NavLink>

      <NavLink 
        to="/apropos">
        A propos
      </NavLink>
    </nav>
  )
}