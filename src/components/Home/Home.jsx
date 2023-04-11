import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobs from '../FeaturedJobs';
import { addToDb } from '../../utils/fakeDB';
import CategoryJob from '../CategoryJob';

const Home = () => {
    const featuredJobs = useLoaderData();
    //view details button handler
    const handleAddToCart = (id) =>{
        console.log(id);
        addToDb(id);
    }


    //job category
    const [jobcat,setJobcategory] = useState([])
    useEffect(()=> {
        fetch('jobCategory.json').then(res=> res.json()).then(data=> setJobcategory(data))
    },[])
    // const {picture,jobName,jobCategory}=jobCat;


    return (
        
        <div>
            <section className='mb-8 '>

                <div className='flex gap-3 items-center '>
                <div className=''>
                <h2 className='text-5xl font-semi-bold'>Moving closer with each step to your <span className='text-animation'>Desired Career</span> </h2>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='home-buttons'>Get Started</button>
                </div>
                <div className='w-full'>
                    <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
                </div>
                </div>
            </section>
            <h1 className='mt-5'>
            Job Category List
            </h1>
            <p className='text-gray-500 text-center mb-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 mb-8'>
                {/* <h1>Job cat : {jobcat.length}</h1> */}
                {
                    jobcat.map(j=>
                    <CategoryJob key={j.id} j={j}></CategoryJob>
                    )
                }
            </div>
            
            <h1 >Featured Jobs</h1>
            <p className='text-gray-500 text-center mb-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
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