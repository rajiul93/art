import Achievement from "../component/Achievement";
import Category from "../component/Category";
import CraftContainer from "../component/CraftContainer";
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
    </div>
  );
};

export default Home;
