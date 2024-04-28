import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const SingleCard2 = ({data}) => {
  const {   image,name ,short_description,_id,sub_category} = data;

    return (
        <div className="card py-0 max-h-[250px] lg:card-side bg-base-100 shadow-xl  h-full">
        <figure className="max-w-[200px]" ><img width={100} src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <small>{sub_category}</small>
          <p>{short_description.slice(0,50)}...</p>
          <div className="card-actions justify-end">
          <Link to={`/coffee-details/${_id}`}>
          
          <button className="btn btn-secondary">View Details</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default SingleCard2;

SingleCard2.propTypes = { 
  data: PropTypes.object,
}