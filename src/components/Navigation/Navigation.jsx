import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
        <ul>
            <li><Link to="/" >Accueil</Link></li>
            <li><Link to="/apropos">A propos</Link></li>
        </ul>
        {/* <Link to="/" >Accueil</Link>
        <Link to="/apropos">A propos</Link> */}
    </nav>
  )
}