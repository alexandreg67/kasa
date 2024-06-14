import data from '../../data/data.json';
import './Gallery.css';
import Card from "../Card/Card";



export default function Gallery() {

    return (

        <div className="container_gallery">
          {data.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
          ))}
        </div>
    );
  }