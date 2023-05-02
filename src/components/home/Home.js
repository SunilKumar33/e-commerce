import React from "react";
import NavBar from "../navbar/NavBar";
import "./home.css";
import Category from "./Category";
import ChooseUs from "./ChooseUs";
import Promotion from "./Promotion";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar />

      <Category />

      <ChooseUs />

      <Promotion />

      <Footer />
    </>
  );
};

export default Home;
