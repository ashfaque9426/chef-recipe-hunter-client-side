
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BiLike } from "react-icons/bi";
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const ChefCard = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {id, imageUrl, name, yearsOfExperience, numberOfRecipes, likes} = data;
    return (
        <div className='col'>
            <article style={{ border: '1px solid var(--secondary-background)'}} className='h-100 rounded-3'>
                <figure className='h-50'>
                    <img className='w-100 h-100 object-fit-cover rounded-3' src={imageUrl} alt={name + " image"} />
                </figure>
                <section className='px-3 h-50'>
                    <h3 className='fs-5 mb-4 fw-semibold text-center'>
                        Chef Name: <span className='fw-bold'>{name}</span>
                    </h3>
                    <p className='fs-5 fw-semibold m-0 my-1'>Years of experience: <span className='fw-semibold'>{yearsOfExperience}</span> years</p>
                    <p className='fs-5 fw-semibold m-0 my-1'>Number of recipes: <span className='fw-semibold'>{numberOfRecipes}</span> recipes</p>
                    <div className='d-flex justify-content-between align-items-center mt-3'>
                        <span className='fs-6 fw-semibold m-0 my-2'>Likes: <span className='fw-semibold'>{likes} <BiLike /> </span> </span>
                        <Link to='/recipes'><button style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold mt-3'>View Recipes</button></Link>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ChefCard;