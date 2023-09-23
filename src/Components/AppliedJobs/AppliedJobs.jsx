import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../../Uitility/LocalStoage";

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedJobs]= useState([]);
    const [displayJobs, setDisplayJobs]= useState([]);

    const handleJobsFilter =filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs)
        } else if(filter === 'remote'){
            const remoteJobs= appliedJobs.filter(job=> job.remote_or_onsite === 'Remote' ) 
            setDisplayJobs(remoteJobs)
        }  else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Onsite' )
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(()=>{
        const storedJobIds =  getStoredJobApplication()
       
       if(jobs.length > 0 ){
// const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

    const jobsApplied =[];
    for(const id of storedJobIds){
        const job = jobs.find(job => job.id === id)
        if(job){
            jobsApplied.push(job)
        }
    }     
     
   
    setAppliedJobs(jobsApplied)
    setDisplayJobs(jobsApplied)



        }
    },[jobs])
    return (
        <div>
            

<details className="dropdown flex justify-end mb-32 ">
  <summary className=" m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={ ()=> handleJobsFilter ('all') } ><a>All</a></li>
    <li onClick={ ()=> handleJobsFilter ('remote') } ><a>Remote</a></li>
    <li onClick={ ()=> handleJobsFilter ('onsite') } ><a>Onside</a></li>
  </ul>
</details>


            <ul>
                {
                    displayJobs.map(job=> <div key={job.id}  >
                         
                                   <div className=" border m-4 p-4 text-center " >
                                    { <img src={job.logo} alt="" /> }
                                    <p> {job.job_title} </p>
                                   <h2 className=" flex gap-3" >  { job.company_name } 
                                    { job.location } </h2>
                                    <p> {job.remote_or_onsite} </p>
                                   </div>

                           </div> )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;