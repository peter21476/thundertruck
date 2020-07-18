import React, { useState } from 'react';
import './Food.scss';
import * as MenuJson from '../menu.json';
import FoodItem from './Food-Item/Food-Item';
import FoodAlt from './Food-Item-Alt/Food-Item-Alt';

function Food(){

    let [menu, setMenu] = useState('thunderMenu');
    let [condition, setCondition] = useState('thunderMenu');

    function callMenuCategory(event) {
        let menuCategory = event.target.id;
        setMenu(menuCategory);
        setCondition(menuCategory);    
    }

    let dishes = MenuJson.default[menu].map(function(item, index){
        if (menu == "thunderMenu") {
            return (
                <FoodItem 
                title={item.dishTitle} 
                description={item.dishDetails} 
                singlePrice={item.dishSinglePrice} 
                doublePrice={item.dishDoublePrice}  
                logo={item.dishLogo}
                photo={item.dishPhoto}
                key={index} />
            )
        } else {
            return (
                <FoodAlt 
                title={item.dishTitle} 
                description={item.dishDetails}
                price={item.dishPrice} 
                key={index} />
            ) 
        }
    });

    return (
        <section id="food" className="food-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2>Food for Thought!</h2>
                        <button id="thunderMenu" className={`menu-button ${condition == 'thunderMenu' ? "active-button" : ""}`} onClick={callMenuCategory}>Thunder Menu</button>
                        <button id="dipsMenu" className={`menu-button ${condition == 'dipsMenu' ? "active-button" : ""}`} onClick={callMenuCategory}>Dips</button>
                        <button id="kidsMenu" className={`menu-button ${condition == 'kidsMenu' ? "active-button" : ""}`} onClick={callMenuCategory}>Thunder Kids' Menu</button>
                        <button id="sidesMenu" className={`menu-button ${condition == 'sidesMenu' ? "active-button" : ""}`} onClick={callMenuCategory}>Side Menu</button>
                        <div className="menu-divider"></div>
                        <div className="menu-items">
                            {dishes}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Food;