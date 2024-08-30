import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h2 className="text-black text-2xl font-medium ">
          India's Super Money app
        </h2>
        <h1 className="md:text-2xl text-2xl text-black font-semibold py-5">
          None other than 
        </h1>
        <div className="text-3xl cursor-pointer text-white bg-green-500 w-auto h-auto rounded-sm">
          INDmoney
        </div>
      </div>
    </section>
  );
};

export default Home;
