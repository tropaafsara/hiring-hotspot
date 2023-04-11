import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../utils/fakeDB';


const JobDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const data2= data.find(item=>item.id===id)
    console.log(data2);
    //card button handler
    const handleAddToCart = (id) =>{
        console.log(id);
        addToDb(id);
        alert("APPLIED!");
    }



    const {jobDescription,jobResponsibility,educationalRequirements,
        experience,salary,jobTitle,phone,email,address,salaryLogo,jobTitleLogo,phoneLogo,emailLogo,locationLogo} = data2;
    
    return (
        <div className='flex gap-8 mt-5 py-5'>
            
           
           <div className='w-3/4'>
           <p className='mb-5'><b>Job Description:</b> {jobDescription}</p>
           <p className='mb-5'><b>Job Responsibility:</b> {jobResponsibility}</p>
           <h4 className='mb-4'><b>Educational Requirements:</b> </h4>
           <p className='mb-5'>{educationalRequirements}</p>
           <h4 className='mb-4'><b>Experience:</b></h4>
           <p className='mb-4'>{experience}</p>
           </div>
           <div className='flex flex-col'>
           <div className='bg-violet-50 p-8 '>
            <p className='mb-5'><b>Job Details</b></p>
            <hr />
            <div className='flex items-center gap-2 mt-5'>
            <img src={salaryLogo} alt="" />
            <p><b>Salary :</b>{salary}</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
            <img src={jobTitleLogo} alt="" />
            <p><b>Job Title :</b> {jobTitle}</p>
            </div>
            <p className='mt-3 mb-5'><b>Contact Information </b> </p>
            <hr />
            <div className='flex items-center gap-2 mt-3'>
            <img src={phoneLogo} alt="" />
            <p><b>Phone :</b> {phone}</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
            <img src={emailLogo} alt="" />
            <p><b>Email :</b> {email}</p>
            </div>
            <div className='flex items-center gap-2 mt-3 mb-5'>
            <img src={locationLogo} alt="" />
            <p><b>Address : </b>{address}</p>
            </div>
           </div>
           <div className='mt-6'>
           <button onClick={() => handleAddToCart(id)} className='w-full px-3 py-4 text-white 
           rounded bg-gradient-to-r from-cyan-500 to-blue-500'  >Apply Now</button>
           </div>
            
           </div>
           
           
        </div>
    );
};

export default JobDetails;