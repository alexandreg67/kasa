// import img_accueil from '../../assets/img/img_accueil.jpg';
import PropTypes from 'prop-types';
import './Banner.css';

export default function Banner({ imgageSrc, titleBanner }) {

  
  return (
    <div className='container_banner'>
      <div className='overlay'></div>
      <img src={imgageSrc} alt='imgage de paysage' className='img_banner' />
      <h1>{titleBanner}</h1>
    </div>
  )
}

Banner.propTypes = {
  imgageSrc: PropTypes.string,
  titleBanner: PropTypes.string
};