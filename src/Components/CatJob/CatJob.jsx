

const CatJob = ({job}) => {
    const {id, logo, category_name, availability}= job;
    return (
        <div>
             <div className="card mt-6 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="logo" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {category_name} </h2>
    <p> {availability} </p>
    
  </div>
</div>
        </div>
    );
};

export default CatJob;