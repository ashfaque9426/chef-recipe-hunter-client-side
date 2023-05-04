// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDF from '../../components/PDF';



const Blog = () => {

    return (
        <section>
            <PDF />
            <PDFDownloadLink document={<PDF />} fileName="MyPageInfo.pdf">
                {({loading}) => (loading ? 'Loading document...' : 'Download now!')}
            </PDFDownloadLink>

            <h2 style={{marginTop: "90px"}}>This is blog Q&A Section</h2>
            <ol>
                <section className='mt-5 mb-5 fs-3'>
                    <li>Tell us the differences between uncontrolled and controlled components?</li>
                    <p className='mt-3 fs-4'><span className='text-warning fw-semibold'>Ans:</span> Controlled Components are those whose value is controlled by a parent react component on the other hand uncontrolled component&apos;s value is managed by the component itself.</p>
                </section>
                <section className='mb-5 fs-3'>
                    <li>How to validate React props using PropTypes?</li>
                    <p className='mt-3 fs-4'><span className='text-warning fw-semibold'>Ans:</span> PropTypes is a library which opens a way to validate the data of the prop passed to a react component function.</p>
                </section>
                <section className='mb-5 fs-3'>
                    <li>Tell us the difference between nodejs and express js?</li>
                    <p className='mt-3 fs-4'><span className='text-warning fw-semibold'>Ans:</span> Nodejs is a runtime enviroment for cross platfrom app development in javascript to execute javascript code outside of a browser enviroment on the other hand, Express.js is a web framework which gives a set of built in tools for developing web applications and APIs. Express.js is built on node.js</p>
                </section>
                <section className='mb-5 fs-3'>
                    <li>What is a custom hook, and why will you create a custom hook?</li>
                    <p className='mt-3 fs-4'><span className='text-warning fw-semibold'>Ans:</span> The reason why developers create custom hook is it makes a way to reuse logic and stateful behaviour accross multiple react components. It will allow to share complex logic wraped into a simple interface between different components that dont have to be a child component of a parent component. </p>
                </section>
            </ol>
        </section>
    );
};

export default Blog;