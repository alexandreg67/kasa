import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ id, title, cover }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img className='coverImg' src={cover} alt={title} />
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};
