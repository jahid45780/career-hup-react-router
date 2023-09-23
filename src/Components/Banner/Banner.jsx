const Banner = () => {
    return (
        <div className=" grid grid-cols-1   lg:grid-cols-2 gap-11 ml-10" >
           <div>
            <p className=" font-semibold text-7xl" >One Step <br /> Closer To Your <br /> <span className=" text-green-800" >Dream Job</span> </p>
              <p> <small> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish. </small> </p>
              <button className=" btn btn-primary mt-5" > Get Started </button>
            </div> 

            <div>
              <img className=" h-96 w-80 shadow-lg rounded " src="https://i.ibb.co/HFr0VBr/20221220-213743.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;