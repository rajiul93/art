import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Lottie from "lottie-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Art from "../../public/Animation/Art.json";
import "./style1.css";
const Slider = () => {
  return (
    <div className="max-w-6xl mx-auto my-14 bg-base-100 font-primary">
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
                <h1 className=" font-bold md:text-4xl">Welcome to <br /> the World of <span className="text-secondary">Artistry</span></h1>
                <p className="text-sm my-4">Discover a world of creativity and expression with our curated collection of artisanal treasures.  </p>
              </div>
              <div className="w-1/2 rounded-2xl overflow-hidden">
                <Lottie  animationData={Art} loop={true} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex items-center justify-between">
              <div className="lg:w-full ">
                <h1>Hello world</h1>
              </div>
              <div>
                <Lottie className="w-1/2" animationData={Art} loop={true} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="md:flex items-center justify-between">
              <div className="lg:w-full ">
                <h1>Hello world</h1>
              </div>
              <div>
                <Lottie className="w-1/2" animationData={Art} loop={true} />
              </div>
            </div>
          </SwiperSlide>
      
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
