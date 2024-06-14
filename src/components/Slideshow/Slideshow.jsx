import "./Slideshow.css";
import arrow_left from "../../assets/img/arrow_left.png";
import arrow_right from "../../assets/img/arrow_right.png";
import PropTypes from "prop-types";
import { useState } from "react";


export default function Slideshow({ logement }) {   

    const [index, setIndex] = useState(0);
    const pictures = logement.pictures;

    console.log(logement);
 
    const updateSlide = (direction) => {
    
        if (direction === 'left') {
            setIndex(index - 1);
            if (index <= 0) {
                setIndex(pictures.length -1);
            }
        } 

        if (direction === 'right') { 
            setIndex(index + 1);
            if (index >= pictures.length -1) {
                setIndex(0)
            }
        }
    };

    return (
        <div className="slider">
            <img className="img-logement" src={pictures[index]} alt={logement.title} />
            {pictures.length > 1 && (
                <>
                    <img onClick={() => updateSlide("left")} className="arrow arrow_left" src={arrow_left} alt="fleche pour aller à gauche" />
                    <img onClick={() => updateSlide("right")} className="arrow arrow_right" src={arrow_right} alt="fleche pour aller à droite" />
                    <p className="pagesNumber">{index + 1}/{pictures.length}</p>
                </>
            )}
        </div>
    );
}

Slideshow.propTypes = {
    logement: PropTypes.any,
}
