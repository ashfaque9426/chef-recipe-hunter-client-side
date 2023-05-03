/* eslint-disable no-unused-vars */
import React from 'react';
import './RecipeCard.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// eslint-disable-next-line react/prop-types
const RecipeCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const { recipeName, cookingMethod, ingredients, rating } = data;
    return (
        <div className='col'>
            <div style={{ background: "transparent", border: "3px solid #e4c290" }} className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{recipeName}</h5>
                    <h6 style={{ color: "#e4c290" }} className='fw-semibold'>Ingredients</h6>
                    <ol>
                        {
                            // eslint-disable-next-line react/prop-types
                            ingredients.map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ol>
                    <p><span style={{ color: "#e4c290" }} className='fw-semibold'>Cooking Method:</span> {cookingMethod}</p>
                    <p><span style={{ color: "#e4c290" }}>Ratings:</span> {rating}</p>
                    <button onClick={() => toast("Added to Favourite")} style={{ borderColor: 'var(--secondary-background)' }} className='btn text-light fw-semibold addToFavBtn'>Add to Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;