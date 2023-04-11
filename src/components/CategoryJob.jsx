import React from 'react';

const CategoryJob = ({j}) => {
    const {jobName,jobCategory,picture,id}= j;
    return (
        <div>
            <div className=' mx-6 p-6 rounded bg-violet-50'>
            <img className=' p-2 mb-4  rounded bg-violet-200' src={picture} alt="" />
            <h4>{jobName}</h4>
            <p>{jobCategory}</p>
            </div>
        </div>
    );
};

export default CategoryJob;

