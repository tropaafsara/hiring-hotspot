import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs';
import { addToDb } from '../../utils/fakeDB';

const Home = () => {
    const featuredJobs = useLoaderData();
    //view details button handler
    const handleAddToCart = (id) =>{
        console.log(id);
        addToDb(id);
    }
    return (
        
        <div>
            <h1>
            Job Category List
            </h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4'>

            </div>
            
            <h1>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2'>
            
            {
                featuredJobs.map(job=>(
                    <FeaturedJobs key={job.id} job={job} handleAddToCart={handleAddToCart}></FeaturedJobs>
                ))}
        </div>
        </div>
    );
};

export default Home;