import Achievement from "../component/Achievement";
import Category from "../component/Category";
import CraftContainer from "../component/CraftContainer";
import OurTeam from "../component/OurTeam";
import Slider from "../slidder/Slider";
const Home = () => {
  return (
    <div>
      <Slider />
      <Achievement />
      <div className="bg-secondary-content">
        <CraftContainer />
      </div>
      <Category />
      <OurTeam />
    </div>
  );
};

export default Home;
