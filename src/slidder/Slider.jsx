import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Lottie from "lottie-react";
import { Typewriter } from 'react-simple-typewriter';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Art from "../../public/Animation/Art.json";
import Art2 from "../../public/Animation/Art2.json";
import Art3 from "../../public/Animation/Art3.json";
import "./style1.css";
const Slider = () => {
  return (
   <div className="bg-base-100 mt-14">
     <div className="max-w-6xl mx-auto  font-primary">
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
             <SwiperSlide className=" ">
            <div className="flex justify-center flex-col md:flex md:flex-row items-center md:justify-between md:px-8 my-14 ">
              <div className="lg:w-full text-center md:text-start  ">
                <h1 className=" font-bold md:text-4xl leading-8">Capturing Lifes <br />Essence <span className="text-secondary">
                  
                  
                  
                  


                  <Typewriter
            words={['Through Art', 'Through the Lens of Art', 'With Artful Technique', 'Via Creative Channels!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />






                  
                  </span></h1>
                <p className="text-sm my-4">Immerse in the beauty of portraiture. Our skilled artists capture emotions and personalities, offering timeless and personalized artworks that reflect life,s essence.</p>
              </div>
              <div className="w-1/2 rounded-2xl overflow-hidden">
                <Lottie  animationData={Art3} loop={true} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="flex justify-center flex-col md:flex md:flex-row items-center md:justify-between md:px-8 my-14 ">
              <div className="lg:w-full text-center md:text-start  ">
                <h1 className=" font-bold md:text-4xl">Welcome to <br /> the World of <span className="text-secondary">Artistry</span></h1>
                <p className="text-sm my-4">Discover a world of creativity and expression with our curated collection of artisanal treasures.  </p>
              </div>
              <div className="w-1/2 rounded-2xl overflow-hidden">
                <Lottie  animationData={Art} loop={true} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <div className="flex justify-center flex-col md:flex md:flex-row items-center md:justify-between md:px-8 my-14 ">
              <div className="lg:w-full text-center md:text-start  ">
                <h1 className=" font-bold md:text-4xl">Your Gateway to  <br /><span className="text-secondary">Artistic Excellence</span></h1>
                <p className="text-sm my-4">Your Gateway to Artistic Excellence. Explore unique art and craft pieces curated to inspire and enchant every creative soul. </p>
              </div>
              <div className="w-1/2 rounded-2xl overflow-hidden">
                <Lottie  animationData={Art2} loop={true} />
              </div>
            </div>
          </SwiperSlide>
         
          
         
      
        </Swiper>
      </>
    </div>
   </div>
  );
};

export default Slider;
