import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {job_title}
                </h2>
                <p> {company_name} </p>

                <div>
                    <button className=" text-green-300 px-5 py-2 font-extrabold border rounded border-green-500 mr-4" > {remote_or_onsite} </button>
                    <button className=" text-green-300 px-5 py-2 font-extrabold border rounded border-green-500 mr-4" > {job_type} </button>
                </div>


                <div className="mt-4 flex gap-4 " >
                    <h2 className=" flex gap-2" > <FaMapMarkerAlt className=" text-2xl"></FaMapMarkerAlt>  {location} </h2>
                    <h2 className=" flex gap-2" > <AiFillDollarCircle className=" text-2xl" ></AiFillDollarCircle> {salary} </h2>
                </div>

                <div>
                <Link to={`/job/${id}`} >  
                <button className="btn btn-primary" > View Details </button>
                </Link>
                </div>

            </div>
        </div>
    );
};

export default Job;