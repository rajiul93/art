import { useEffect } from "react";
import Achievement from "../component/Achievement";
import Category from "../component/Category";
import CraftContainer from "../component/CraftContainer";
import Hero from "../component/Hero";

const Home = () => {
  useEffect(() => {
    fetch("https://art-server-sigma.vercel.app/craft")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);


  return (
    <div>
      <Hero />
      <Achievement />
      <CraftContainer />
 <Category/>
    </div>
  );
};

export default Home;
