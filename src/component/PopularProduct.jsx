import PropTypes from "prop-types";
import SingleCoffee from "./SingleCoffee";

const PopularProduct = ({ popularProduct }) => {

    return (
        <div>
            <div className="text-center">
                <h1>Our Popular Products</h1>
                <button className="btn">Add Coffee</button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
                {
                    popularProduct.map(i=><SingleCoffee i={i} key={i._id} />)
                }
            </div>
        </div>
    );
};

export default PopularProduct;

PopularProduct.propTypes = {
  popularProduct: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      photo: PropTypes.string,
    })
  ).isRequired,
};