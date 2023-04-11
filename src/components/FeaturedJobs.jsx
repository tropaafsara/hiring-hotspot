import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobs = ({job,handleAddToCart}) => {
    const {companyLogo,jobName,jobCategory,jobLocation,jobType,location,salary,locationLogo,salaryLogo,id}= job;
    return (
        
        <div >
            <div className=' p-6 rounded border mx-4 my-4'>
            <img className='object-cover w-30 h-5 mb-6 rounded  md:h-64 xl:h-10' 
            src={companyLogo} alt=""/>
            <h4 className='mb-1'>{jobName}</h4>
            <small><p className='mb-2'>{jobCategory}</p></small>
            <div className='mb-1 flex gap-3'>
            <button className='btn-secondary'>{jobLocation}</button>
            <button className='btn-secondary'>{jobType}</button>
            </div>
            <div className='flex items-center gap-5 mb-3 mt-2'>
            <div className='flex'>
            <img src={locationLogo} alt="" />
            <p>{location}</p>
            </div>
            <div className='flex'>
            <img src={salaryLogo} alt="" />
            <p>Salary: {salary}</p>
            </div>
            </div>
            {/* <button onClick={() => handleAddToCart(id)} type='button' className='btn-primary'>View Details</button> */}
            <Link to={`../details/${id}`}>
            <button type='button' className='btn-primary'>View Details</button>
            
            </Link>
            
        </div>
        </div>
    );
};

export default FeaturedJobs;