import React from 'react';
import FoodItemCSS from './Food-Item.scss';


function FoodItem(props){
    return (
        <div className="food-item-wrapper">
            <div class="inner-wrapper">
                <div className="item-photo">
                    <img src={props.photo} /> 
                </div>
                <div className="item-logo">
                    <img src={props.logo} /> 
                </div>
                <div className="item-description">
                    <em>{props.description}</em>
                </div>
                <div className="item-price">
                    <p><strong>Singel meny:</strong> {props.singlePrice}</p>
                    <p><strong>Dubbel meny:</strong> {props.doublePrice}</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem;