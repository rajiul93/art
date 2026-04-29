import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCoffee = ({ i }) => {
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={i.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Link to={`/coffee-details/${i._id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;

SingleCoffee.propTypes = {
  i: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};
