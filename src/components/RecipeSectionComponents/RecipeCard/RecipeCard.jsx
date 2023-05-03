/* eslint-disable no-unused-vars */
import React from 'react';
import './RecipeCard.css'

// eslint-disable-next-line react/prop-types
const RecipeCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const { recipeName, cookingMethod, ingredients, rating } = data;
    return (
        <div className='col'>
            <div style={{ background: "transparent", border: "3px solid #e4c290" }} className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{recipeName}</h5>
                    <h6>Ingredients</h6>
                    <ol>
                        {
                            ingredients.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ol>
                    <p>Cooking Method: {cookingMethod}</p>
                    <p>Ratings: {rating}</p>
                    <button style={{ borderColor: 'var(--secondary-background)' }} className='btn text-light fw-semibold addToFavBtn'>Add to Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;