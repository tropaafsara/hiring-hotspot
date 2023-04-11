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
    }



    const {jobDescription,jobResponsibility,educationalRequirements,
        experience,salary,jobTitle,phone,email,address,salaryLogo,jobTitleLogo,phoneLogo,emailLogo,locationLogo} = data2;
    
    return (
        <div className='grid grid-cols-2 gap-8'>
           
           <div>
           <p><b>Job Description:</b> {jobDescription}</p>
           <p><b>Job Responsibility:</b> {jobResponsibility}</p>
           <h4><b>Educational Requirements:</b> </h4>
           <p>{educationalRequirements}</p>
           <h4><b>Experience:</b></h4>
           <p>{experience}</p>
           </div>
           <div>
            <p><b>Job Details</b></p>
            <hr></hr>
            <div className='flex items-center gap-2'>
            <img src={salaryLogo} alt="" />
            <p><b>Salary :</b>{salary}</p>
            </div>
            <div className='flex items-center gap-2'>
            <img src={jobTitleLogo} alt="" />
            <p><b>Job Title :</b> {jobTitle}</p>
            </div>
            <p><b>Contact Information :</b> </p>
            <hr />
            <div className='flex items-center gap-2'>
            <img src={phoneLogo} alt="" />
            <p><b>Phone :</b> {phone}</p>
            </div>
            <div className='flex items-center gap-2'>
            <img src={emailLogo} alt="" />
            <p><b>Email :</b> {email}</p>
            </div>
            <div className='flex items-center gap-2'>
            <img src={locationLogo} alt="" />
            <p><b>Address : </b>{address}</p>
            </div>
            <button onClick={() => handleAddToCart(id)} className='btn-primary'>Apply Now</button>
           </div>
           
        </div>
    );
};

export default JobDetails;