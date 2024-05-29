import React from "react";
import Hero from "../component/Hero";
import TShirts from "../component/TShirts";
import Emailoffer from "../component/Emailoffer";

function Home() {
  return (
    <div className="Home_container">
      <Hero />
      <TShirts />
      <Emailoffer />
    </div>
  );
}
export default Home;
