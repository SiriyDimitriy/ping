import React from 'react';
import StarIcon from '../../assets/svg/star_icon.svg';

class RatingStars extends React.Component {

    render() {
        return <div className='rating_stars'>
            <StarIcon className='star star--one filled'/>
            <StarIcon className='star star--two filled'/>
            <StarIcon className='star star--tree filled'/>
            <StarIcon className='star star--four filled'/>
            <StarIcon className='star star--five filled'/>
        </div>
    }
}

export default RatingStars;