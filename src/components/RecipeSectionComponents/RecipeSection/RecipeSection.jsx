// eslint-disable-next-line no-unused-vars
import React from 'react';
import ChefRecipesBanner from '../../Banners/ChefRecipesBanner/ChefRecipesBanner';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';

const RecipeSection = () => {
    const dataObj = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const {recipes} = dataObj;

    return (
        <>
            <ChefRecipesBanner dataObj={dataObj} />
            <h2 className='fw-semibold mb-5'>Recipe Section</h2>
            <section className='row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3'>
                {
                    recipes.map(data => <RecipeCard key={data.id} data={data} />)
                }
            </section>
        </>
    );
};

export default RecipeSection;