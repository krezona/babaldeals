import React from "react";
import "../index.css";
import HeroFirst from "../Components/Hero/HeroFirst/HeroFirst";
import HeroSecond from "../Components/Hero/HeroSecond/HeroSecond";
import HeroThird from "../Components/Hero/HeroThird/HeroThird";
import HeroFourth from "../Components/Hero/HeroFourth/HeroFourth";

const Home = () => {
  return (
    <div>
      <HeroFirst />
      <HeroSecond />
      <HeroThird />
      <HeroFourth />
    </div>
  );
};

export default Home;
