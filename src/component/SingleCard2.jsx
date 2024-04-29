import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";


const SingleCard2 = ({data}) => {
  const {   image,name ,short_description,_id,sub_category,rating,price,processing_time} = data;

    return (
        <div className="card px-2 mx-3 lg:card-side bg-base-100 shadow-xl hover:shadow-none  mb-5 h-full">
        <figure className="max-w-[200px] mt-3 lg:mt-0" ><img width={100} src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title underline">{name}</h2>
          <small><span className="font-bold">Sub_category: </span>{sub_category}</small>
          <small>Rating: {rating}</small>
          <small>Price: ${price}</small>
          <small>Processing_time: {processing_time}</small>
          <p className="text-[12px]"><span className="font-bold">Description</span>:{short_description.slice(0,100)}...</p>
          <div className="card-actions justify-end">
          <Link to={`/coffee-details/${_id}`}>
          
          <button 
          className="btn btn-secondary"
          >View Details</button>
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