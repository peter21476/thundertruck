import React from 'react';
import FoodAltItemCSS from './Food-Item-Alt.scss';

const footItemAlt = (props) => {
    return(
        <div className="food-alt-wrapper">
            <div className="inner-wrapper">
                <div className="food-alt-name">
                    {props.title}
                </div>
                <div className="food-alt-description">
                    <em>{props.description}</em>
                </div>
                <div className="food-alt-price">
                    <strong>{props.price}</strong>
                </div>
            </div>
        </div>
    );
};

export default footItemAlt;