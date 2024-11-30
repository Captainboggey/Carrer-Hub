import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id == id)
    console.log(job)
    return (
        <div>
            
            <div className='grid gap-4 border md:grid-cols-4'>
                <div className='border md:col-span-3'>
                    <h2 className="text-4xl">Details Coming Here</h2>
                    <p>{job.company_name}</p>
                    <h2>Job Details of: {job.job_title} </h2>
                </div>
                    <div className='border'>
                        <h2 className='text-2xl'>Side things</h2>
                       <button className='btn btn-primary w-full'> Apply Now</button>
                    </div>

                

            </div>
        </div>
    );
};

export default JobDetails;