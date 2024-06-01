import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import { useNavigate } from 'react-router-dom';

export default function Card({ id, title, cover }) {

  const navigate = useNavigate();

  const handleClick = () => {
    // console.log(id);
    navigate(`/logement/${id}`)
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <img className='coverImg' src={cover} alt={title} id={id} onClick={handleClick}/>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
