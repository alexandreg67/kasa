import { useNavigate, useParams } from "react-router-dom";
import "./Logement.css";
import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useEffect, useState } from "react";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";

export default function Logement() {

  const { id } = useParams();
  const navigate = useNavigate();
  const [logement, setLogement] = useState();

  useEffect(() => {
    let _logement = data.find((item) => item.id === id);

    if (!_logement) {
      return navigate("/error");
    }
    setLogement(_logement);
  }, [id, navigate]);
  
  return (

    <div>
      <Header />
        {logement && <div className="container-logement">
          <Slideshow logement={logement}/>

          <div className="content-logement">
            <h1 className="title-logement">{logement.title}</h1>
            <p className="location-logement">{logement.location}</p>

            <div className="container-tags">
              {logement.tags.map((tag, index) => {
                return <Tag key={index} tagName={tag} />
              })}
            </div>

            <div className="hostRating">
              <Host hostName={logement.host.name} hostPicture={logement.host.picture} />

              <Rating rating={+logement.rating} />

            </div>

            <div className="container-collapse">
              <Collapse title="Description" content={logement.description} />
              <Collapse title="Equipements" content={logement.equipments.map((e, index) => {
                return <li className="equipmentsList" key={index}>{e}</li>
              })} />
            </div>
          </div>

        </div>}
      <Footer />
    </div>    
    
  ) 
}