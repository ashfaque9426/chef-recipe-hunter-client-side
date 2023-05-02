// eslint-disable-next-line no-unused-vars
import React from 'react';
import maxicanFoodBg from '../../../assets/backgroundImages/mexicanFoodBG.jpg'
import foodAndWineImg from '../../../assets/images/foodAndWineImg.jpg'
import './FoodAndWine.css'

const FoodAndWine = () => {
    return (
        <section style={{ backgroundImage: `url(${maxicanFoodBg})`, backgroundSize: "cover", backgroundRepeat: 'no-repeat', backgroundPosition: "center", height: '550px', marginTop: '100px' }} className='position-relative text-center foodAndWine'>
            <div style={{ height: '550px' }} className='d-flex flex-column flex-md-row justify-content-md-between align-items-center foodAndWineDiv'>
                <figure className='w-50 px-5 my-3'>
                    <img className='img-fluid' src={foodAndWineImg} alt="foodAndWine section image" />
                </figure>
                <article className='w-50 px-3'>
                    <h2>Food and wine of Maxico</h2>
                    <p className='mt-3'>Deive into the excellent produce and vibrant restaurants of Maxico and get to know its top chefs as we discover what the country's food and drink so special.</p>
                    <button style={{ borderColor: 'var(--secondary-background)'}} className='btn text-light discover-btn'>Discover More</button>
                </article>
            </div>
        </section>
    );
};

export default FoodAndWine;