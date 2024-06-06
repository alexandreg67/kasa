import './Header.css';
import Logo from '../../assets/img/Logo.png';
import LogoPetit from '../../assets/img/Logo_petit.png';
import Navigation from '../Navigation/Navigation';
import { useEffect, useState } from 'react';

export default function Header() {

  const [logoImage, setLogoImage] = useState(Logo)
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setLogoImage(LogoPetit)
      } else {
        setLogoImage(Logo)
      }
    });
  }, []);


  return (
    <div className="container_header">
        <img src={logoImage} alt="Logo du site" />
        <Navigation />
    </div>
  )
}