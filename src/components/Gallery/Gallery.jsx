import React from 'react';
import data from '../../data/data.json';
import './Gallery.css';
import Card from "../Card/Card";
import { useState } from "react";



export default function Gallery() {

    // console.log(data);

    const [currentIndex, setCurrentIndex] = useState(0);

    const cardsPage = 6;
    const totalCards = data.length;
    
    const prevCards = () => {
      setCurrentIndex((currentIndex - cardsPage + totalCards) % totalCards);
    };
  
    const nextCards = () => {
      setCurrentIndex((currentIndex + cardsPage) % totalCards);
    };
  
    const getVisibleCards = () => {
        const end = currentIndex + cardsPage;
        if (end <= totalCards) {
          return data.slice(currentIndex, end);
        }
        return data.slice(currentIndex, totalCards).concat(data.slice(0, end - totalCards));
    };

    const visibleCards = getVisibleCards();

    return (

        <div className="container_gallery">
          {visibleCards.map((item) => (
            <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
          ))}
        {totalCards > cardsPage && (
            <>
            <button id="prevButton" className="gallery-button" onClick={prevCards}>
              Précédent
            </button>
            <button id="nextButton" className="gallery-button" onClick={nextCards}>
              Suivant
            </button>
            </>
        )}
        </div>
    );
  }