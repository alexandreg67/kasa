import PropTypes from 'prop-types';
import './Host.css';

export default function Host({ hostName, hostPicture }) {

    const firstName = hostName.split(' ')[0];
    const lastName = hostName.split(' ')[1];

    return (
        <div className='hostContainer'>
            <div className='firstLastName'>
                <span className='spanHostPicture'>{firstName}</span>
                <span className='spanHostPicture'>{lastName}</span>
            </div>
            <img className='hostPicture' src={hostPicture} alt="photo de l'hôte" />
        </div>
    )
}

Host.propTypes = {
    hostName: PropTypes.string,
    hostPicture: PropTypes.string,
}