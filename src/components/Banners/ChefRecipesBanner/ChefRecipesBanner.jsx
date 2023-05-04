/* eslint-disable no-unused-vars */
import React from 'react';
import LazyLoad from 'react-lazy-load';
import './ChefRecipesBanner.css'
import chefsRecipesBanner from '../../../assets/banner-images/chefsRecipesBanner.jpg'

// eslint-disable-next-line react/prop-types
const ChefRecipesBanner = ({dataObj}) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, imageUrl, yearsOfExperience, numberOfRecipes, bio, likes } = dataObj;
    return (
        <section style={{ backgroundImage: `url(${chefsRecipesBanner})`, backgroundSize: 'cover', backgroundPosition: "center", backgroundAttachment: "fixed", height: "calc(100vh - 30vh),", width: "100vw"}} className='mb-5 chefBannerContainer px-5' role='banner'>
            <div style={{ height: "calc(100vh - 30vh)",  }} className='d-flex flex-column-reverse flex-md-row gap-5 justify-content-center align-items-center chefBannerDetails'>
                <figure style={{ borderRadius: "50%", aspectRatio: "1", border: '3px solid var(--secondary-background)' }} className='overflow-hidden w-50 flex-sm-shrink-0 flex-md-shrink-0 flex-xxl-shrink-1 m-0 chefFig'>                
                    <LazyLoad height={762} offset={300} onContentVisible={() => { console.log('loaded!') }}>
                        <img className='chefImg' src={imageUrl} alt="Chef Image" />
                    </LazyLoad>
                </figure>
                <section>
                    <h2 className='mb-3 chefH2'>Chef Name: {name} </h2>
                    <p><span style={{ color: "#e4c290"}} className='fs-5 fw-semibold'>Bio:</span> {bio}</p>
                    <p><span style={{ color: "#e4c290"}} className="fs-5 fw-semibold">Recipes:</span> {numberOfRecipes} recipes</p>
                    <p><span style={{ color: "#e4c290"}} className="fs-5 fw-semibold">Years of Experience:</span> {yearsOfExperience} years</p>
                    <p><span style={{ color: "#e4c290"}} className="fs-5 fw-semibold">Likes:</span> {likes}</p>
                </section>
            </div>
        </section>
    );
};

export default ChefRecipesBanner;