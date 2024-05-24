import logo_footer from '../../assets/Logo_footer.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className='container_footer'>
      <img src={logo_footer} alt="Logo du site" />
      <p className='copyright'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}