import './Body.css';
import img_accueil from '../../assets/img/img_accueil.jpg';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

const title = "Chez vous, partout et ailleurs";

export default function Body() {


  return (
    <div className='container_body'>
        <Banner imgageSrc={img_accueil} titleBanner={title} />
        <Gallery />
    </div>
  )
} 