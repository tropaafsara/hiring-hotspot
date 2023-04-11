import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import JobDetails from '../JobDetails';
import FeaturedJobs from '../FeaturedJobs';

const AppliedJobs = () => {
    // const appliedJobs = localStorage.getItem('shopping-cart')
    // console.log(appliedJobs);
    // if(appliedJobs){
    //     const applied = JSON.parse(appliedJobs)
    // }

    
    const {cartArray, products} = useLoaderData();
    console.log(cartArray);

    
    
    
    return (
        <div className=''>
            <div className='flex flex-col max-w-6xl p-6 space-y-4 sm:p-10'>
            {/* <h1>This is applied jobs :{applied.length}</h1> */}
            <h1>Applied Jobs</h1>
            {/* <h2>{cartArray.length}</h2> */}
            <ul className='flex flex-col '>
                {cartArray.map(job=><FeaturedJobs key={job.id} job={job}></FeaturedJobs>)}
            </ul>
        </div>
        </div>
    );
};

export default AppliedJobs;