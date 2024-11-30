import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";

const Job = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite,location,job_type,salary } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div className="flex gap-2">
            <button className="text-[#7E90FE] py-2 px-5 font-extrabold border border-[#7E90FE] rounded">{remote_or_onsite}</button>
            <button className="text-[#7E90FE] py-2 px-5 font-extrabold border border-[#7E90FE] rounded">{job_type}</button>
          </div>
          <div className="mt-4 flex gap-2 items-center">
            <h2 className="flex gap-2"><IoLocationOutline className="text-2xl"></IoLocationOutline>{location}</h2>
            <h2  className="flex gap-2"><LuCircleDollarSign className="text-2xl"></LuCircleDollarSign>{salary}</h2>
          </div>
          <div className="card-actions ">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
