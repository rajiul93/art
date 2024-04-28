import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const SingleCarft = ({carft}) => {
    const {   image,sub_category,name ,userName,rating,_id} = carft;
    const navigate = useNavigate()

    const handleNavigate = (_id) =>{
        navigate(`/coffee-details/${_id}`)
    }
    // console.log(carft);
    return (
        <div className='bg-white dark:bg-gray-50 dark:text-gray-800 rounded-xl h-full'>
               <article className="flex flex-col  border p-4 rounded-2xl w-full h-full cursor-pointer"> 
                        <img alt="" className="object-cover rounded-2xl w-full max-h-56 mb-7  bg-gray-500" src={image} />
                    
                    <div className="flex flex-col flex-1 space-y-2 "> 
                        
                        {/* <div className="space-x-5">
                        <a rel="noopener noreferrer" href="#" className="shadow-button" data-abc="true">{tags[0]}</a>
                        <a rel="noopener noreferrer" href="#" className="text-xs text-[#23BE0A] font-medium primary-font bg-green-100 rounded-full p-3 " data-abc="true">{tags[1]}</a>
                        </div> */}

                        <h3 onClick={()=>handleNavigate(_id)}  className="flex-1 py-2 font-bold text-2xl leading-snug secondary-font">{name}</h3>
                        <p className="font-medium text-[16px] text-gray-700 primary-font">By: {userName}</p>

                        <hr className="border-dashed" />

                        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                            <span>{sub_category}</span>
                            <span className="flex gap-3 font-medium primary-font text-[16px]">{rating}  <FaRegStar /></span>
                        </div>
                    </div>
                </article>
           
        </div>
    );
};

export default SingleCarft;

SingleCarft.propTypes = { 
    carft: PropTypes.object,
}