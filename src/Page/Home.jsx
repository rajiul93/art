import Achievement from "../component/Achievement";
import Category from "../component/Category";
import CraftContainer from "../component/CraftContainer";
// import Hero from "../component/Hero";
import Slider from "../slidder/Slider";
const Home = () => {



  return (
    <div> 
<Slider/>
      {/* <Hero /> */}
      <Achievement />
      <CraftContainer />
 <Category/>
    </div>
  );
};

export default Home;
