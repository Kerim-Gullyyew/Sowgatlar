import React from "react";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import NewArrival from "../../components/NewArrival";
import FeaturedProducts from "../../components/FeaturedProducts";
import Categories from "../../components/Categories";
import LikedProducts from "../../components/LikedProducts";
import Ideas from "../../components/Ideas";

const HomePage = () => {

  let content = (
    <>
      <Banner />
      <Features />
      <NewArrival />
      <Ideas />
      <LikedProducts />
      <Categories />
      <FeaturedProducts />
    </>
  )
  return content

};

export default HomePage;
