// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../ChefCard/ChefCard';

const ChefSection = () => {
    const chefData = useLoaderData();
    console.log(chefData);
    return (
        <section>
            <h2 className='my-5 text-center'>Avialable Chefs: {chefData.length}</h2>
            <section className='row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4'>
                {
                    chefData.map(data => <ChefCard key={data.id} data={data} />)
                }
            </section>
        </section>
    );
};

export default ChefSection;