
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './ChefCard.css'

// eslint-disable-next-line react/prop-types
const ChefCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const { imageUrl, name, yearsOfExperience, numberOfRecipes, likes} = data;
    return (
        <div className='col'>
            <article style={{ border: '1px solid var(--secondary-background)'}} className='h-100 rounded-3 single-card position-relative'>
                <figure className='h-50 m-0 overflow-hidden rounded-top text-center'>
                    <img className='img-fluid rounded-top' src={imageUrl} alt={name + " image"} />
                </figure>
                <section className='h-50 px-3'>
                    <h3 className='fs-5 my-4 fw-semibold text-center'>
                        Chef Name: <span className='fw-bold'>{name}</span>
                    </h3>
                    <p className='fw-semibold m-0 my-1'>Years of experience: <span className='fw-semibold'>{yearsOfExperience}</span> years</p>
                    <p className='fw-semibold m-0 my-1'>Number of recipes: <span className='fw-semibold'>{numberOfRecipes}</span> recipes</p>
                    <div style={{width: "90%"}} className='position-absolute bottom-0'>
                        <div className='d-flex justify-content-between align-items-center pb-3'>
                            <span className='fs-6 fw-semibold m-0 my-2'>Likes: <span className='fw-semibold'>{likes} <BiLike /> </span> </span>
                            <Link to='/recipes'><button style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold'>View Recipes</button></Link>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ChefCard;