import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.css';
import arrow from '../../assets/img/arrow_back.png';

export default function Collapse({ title, content }) {

    // utilisation de useState pour gérer l'ouverture et la fermeture du collapse
    const [isOpen, setIsOpen] = useState(false);

    // fonction pour ouvrir ou fermer le collapse
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    // console.log("Collapse isOpen : ", isOpen);

  return (

    <div className="collapse-container">
        <div className="collapse-header" >
            <h2>{title}</h2>
            <img
                onClick={toggleCollapse}
                className={`collapse-arrow ${isOpen && 'open'}`}
                src={arrow}
                alt="fleche d'ouverture et de fermeture du collapse"
            />
        </div>
        <div className={`collapse-content ${isOpen && 'open'}`}>
        <div className="collapse-content-inner">{content}</div>
        </div>
    </div>
  );
}

Collapse.propTypes = {
    title: PropTypes.any,
    content: PropTypes.any,
};