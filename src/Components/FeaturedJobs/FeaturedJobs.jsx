import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    // this not the best way to load show all data

    const [dataLength, setDataLength] = useState(4);




    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className=" text-center space-y-4" >
                <h2 className=" text-5xl" >Featured Jobs</h2>
                <p>We know that finding the right professionals to work on your project is extremely important</p>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 shadow-lg mt-6" >
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} ></Job>)
                }
            </div>

              
            <div className=" text-center" >

            <div className=  { dataLength === jobs.length &&  'hidden' }>
                
                <button onClick={()=> setDataLength(jobs.length)} className="btn mt-4 mb-4 text-center " > Show Al Jobs
               </button> </div>

            </div>

        </div>
    );
};

export default FeaturedJobs;