import img_accueil from '../../assets/img_accueil.jpg';
import './Banner.css';

export default function Banner() {
  return (
    <div className='container_banner'>
      <div className='overlay'></div>
      <img src={img_accueil} alt='imgage accueil' className='img_banner' />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}