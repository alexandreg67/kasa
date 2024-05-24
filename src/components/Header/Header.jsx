import './Header.css';
import Logo from '../../assets/Logo.png';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <div className="container_header">
        <img src={Logo} alt="Logo du site" />
        <Navigation />
    </div>
  )
}