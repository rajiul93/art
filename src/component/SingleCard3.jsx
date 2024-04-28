import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCard3 = ({ data,afterDelete,myData }) => {
  const {
    image,
    sub_category,
    name,
    _id,
    userName,
    rating,
    price,
    processing_time,
    short_description,
  } = data;
  const handelDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete-craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) =>{
            if (result.deletedCount>0) {
                const deleteOne =  myData.filter(item => item._id != _id)
                afterDelete(deleteOne)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
          });
      }
    });

    // fetch(`http://localhost:5000/delete-craft/${_id}`, {
    //   method: "DELETE",
    // })
    // .then(res=>res.json())
    // .then(data => console.log(data))
  };

  return (
    <div className=" md:flex justify-between rounded-lg items-center mb-5  p-2 md:p-8 py-0  bg-base-100 shadow-xl">
      <div className="md:flex gap-6 items-start w-3/4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2">
        <div>
          <figure className="max-w-[300px] ">
            <img className="rounded-lg" src={image} alt="Album" />
          </figure>
        </div>

        <div className="w-full text-[18px] font-semibold  ">
          <h2 className="card-title">{name}</h2>
          <p>{short_description.slice(0,50)}</p>
          <h1>Author : {userName}</h1>
          <h1>Processing Time: {processing_time}</h1>
          <h1>Price: ${price}</h1>
          <h1>Rating: {rating}</h1>
          <h1>Sub_category: {sub_category}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <Link to={`/update/${_id}`}>
        
        <button className="btn btn-success w-full"> Update </button>
        </Link>
        <button onClick={() => handelDelete(_id)} className="btn btn-warning">
          Delete
        </button>
        <Link to={`/coffee-details/${_id}`}>
          <button className="btn btn-secondary">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard3;

SingleCard3.propTypes = {
  data: PropTypes.object,
  afterDelete: PropTypes.func,
  myData: PropTypes.array,

};
