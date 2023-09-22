import { useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle,AiFillWallet,AiFillPhone,AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobDetails = () => {
  
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
     console.log(job);


    return (
        <div>
         
            
           <div className=" grid grid-cols-1 md:grid-cols-4 gap-4" >
            <div className=" border p-4 md:col-span-3" >
                <p> <span className=" text-3xl font-bold" >Job Description: </span> {job.job_description} </p>
               <p> <span className=" text-3xl font-bold" >job_responsibility:</span>  { job.job_responsibility } </p>
               <h1 className=" text-2xl font-bold" > Educational Requirements: </h1>
               <p> {job.educational_requirements} </p>
               <h1 className=" text-2xl font-bold" > Experiences: </h1>
               <p> {job.experiences} </p>

            </div>
            <div className=" p-4 border " >
                <p> Job Details </p> <hr className=" mt-3" />
                 <h2 className=" flex mt-3" > <AiFillDollarCircle className=" text-2xl" ></AiFillDollarCircle> <span className=" font-bold" >Salary :</span> {job.salary} (Per Month) </h2>
                 <h2 className=" flex mt-3" >   <AiFillWallet className=" text-2xl" ></AiFillWallet> <span className=" font-bold " >Job Title : </span> {job.job_title} </h2>
                 <p className=" mt-4" > Contact Information </p> <hr className=" mt-3" />
                 <p className=" flex mt-4" > <AiFillPhone className=" text-2xl" ></AiFillPhone> <span className=" font-bold" >Phone:</span> {job.phone} </p>
                 <p className=" flex mt-4" > <AiOutlineMail className=" text-2xl" ></AiOutlineMail> <span className=" font-bold" >Email:</span> {job.email} </p>
                 <p className=" flex mt-4" > <FaMapMarkerAlt className=" text-2xl" ></FaMapMarkerAlt> <span className=" font-bold" >Address:</span> {job.address} </p>
                <button className="btn btn-primary w-full mt-4" >Apply Now</button>
            </div>

           </div>
        </div>
    );
};

export default JobDetails;