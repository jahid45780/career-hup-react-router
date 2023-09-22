import { useEffect, useState } from "react";
import CatJob from "../CatJob/CatJob";

const CategoryList = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    return (
        <div>
            <h2 className=" text-5xl text-center mt-7" > Job Category list </h2>
            <p className=" text-center mt-4" > Explore thousands of job opportunities with all the information you need. Its your future </p>

            <div className=" grid grid-cols-1 lg:grid-cols-4"  >
                {
          jobs.map(job=> <CatJob key={job.id} job={job} ></CatJob> )
                }
            </div>
        </div>
        
    );
};

export default CategoryList;