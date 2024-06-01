import { useNavigate, useParams } from "react-router-dom";
import "./Logement.css";
import data from "../../data/data.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collapse from "../../components/Collapse/Collapse";
import { useEffect, useState } from "react";

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
  }, []);
  
  return (

    <div>
      <Header />
        {logement && <div className="container-logement">
          <img className="img-logement" src={logement.cover} alt={logement.title} />

          <h1 className="title-logement">{logement.title}</h1>
          <p className="location-logement">{logement.location}</p>
          <div className="container-tags">

          </div>
          <div className="container-collapse">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Equipements" content={logement.equipments} />
          </div>
        </div>}
      <Footer />
    </div>    
    
  ) 
}