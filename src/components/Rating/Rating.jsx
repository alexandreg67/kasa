import PropTypes from 'prop-types';
import './Rating.css';

export default function Rating({ rating }) {
    return (
        <div className='ratingContainer'>
            <div className='ratingStars'>
                {[1, 2, 3, 4, 5].map((star, index) => {
                    return <span key={index} className={rating >= star ? 'starFull' : 'starEmpty'}>★</span>
                })}
            </div>
        </div>
    );
}

Rating.propTypes = {
    rating: PropTypes.number,
}

