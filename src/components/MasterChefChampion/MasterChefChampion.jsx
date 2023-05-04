// eslint-disable-next-line no-unused-vars
import React from 'react';
import './MasterChefChampion.css'
import masterChefSectionImg1 from '../../assets/images/masterChefSectionImg1.jpg'
import masterChefSectionImg2 from '../../assets/images/masterChefSectionImg2.jpg'
import masterChefSectionImg3 from '../../assets/images/masterChefSectionImg3.jpg'

const MasterChefChampion = () => {
    return (
        <section style={{marginTop: "90px"}} className='px-5 mb-5'>
            <h2 className='text-center fs-4 fw-semibold'>Have you got what it takes to become a MasterChef Champion?</h2>
            <p className='mt-3 mb-5 text-center'>Whether you’re an amateur chef looking to showcase your home-taught skills, or a food professional wanting to take your cooking to the next level, you can apply for MasterChef in the Maxico NOW!</p>
            <div className='row row-cols-1 row-cols-lg-2 row-cols-xxl-3 text-center g-4'>
                <div className='col'>
                    <article className='h-100 masterArt'>
                        <h3 className='fw-semibold text-start'>Apply for MasterChef Maxico &gt;</h3>
                        <figure style={{border: "6px solid #fff", borderRadius: "8px"}} className='m-0 overflow-hidden masterFig'>
                            <img className='img-fluid' src={masterChefSectionImg1} alt="chefs image" />
                            <h4>Apply Now</h4>
                        </figure>
                    </article>
                </div>
                <div className='col'>
                    <article className='h-100 masterArt'>
                        <h3 className='fw-semibold text-start'>Apply for MasterChef: The Professionals &gt;</h3>
                        <figure style={{ border: "6px solid #fff", borderRadius: "8px" }} className='m-0 overflow-hidden masterFig'>
                            <img className='img-fluid' src={masterChefSectionImg2} alt="chefs image" />
                            <h4>Apply Now</h4>
                        </figure>
                    </article>
                </div>
                <div className='col'>
                    <article className='h-100 masterArt'>
                        <h3 className='fw-semibold text-start'>Apply for Young MasterChef &gt;</h3>
                        <figure style={{ border: "6px solid #fff", borderRadius: "8px" }} className='m-0 overflow-hidden masterFig'>
                            <img className='img-fluid' src={masterChefSectionImg3} alt="chefs image" />
                            <h4>Apply Now</h4>
                        </figure>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default MasterChefChampion;