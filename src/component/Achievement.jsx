import 'aos/dist/aos.css';
import { GiFamilyHouse, GiHumanPyramid } from "react-icons/gi";
const Achievement = () => {
  return (
    <div className="bg-white py-14">

<div className="text-center  max-w-2xl mx-auto ">
        <h1 
        // data-aos="fade-up-right" 
        className="font-bold text-4xl mb-6">Achievement</h1>
        <p 
        // data-aos="fade-up-right"
        >
     A timeless language transcending boundaries, art captures the human experience in strokes of brilliance.
        </p>
      </div>
     

      <div className="md:flex justify-center gap-24 mt-14">
        <div 
        // data-aos="fade-up-right" data-aos-duration="1000" 
        className="flex flex-col justify-center  items-center gap-4">
          <GiFamilyHouse className="text-5xl text-green-600" />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Completed Property</p>
        </div>
        <div
        //  data-aos="fade-up-right" data-aos-duration="1200" 
         className="flex flex-col justify-center  items-center gap-4">
          <img
            className="w-14"
            src="https://resido-v2.smartdemowp.com/wp-content/uploads/2022/07/icon-5.png"
            alt=""
          />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Apartment Rent</p>
        </div>
        <div
        //  data-aos="fade-up-right" data-aos-duration="1500" 
         
         className="flex flex-col justify-center  items-center  gap-4">
          <GiHumanPyramid className="text-5xl text-green-600" />
          <p className="text-4xl font-bold">2050+</p>
          <p className="text-gray-600">Happy Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
