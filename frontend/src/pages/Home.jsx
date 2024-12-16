import React from "react";
import Sidebar from "../components/Sidebar";
import MessageContainer from "../components/MessageContainer";

const Home = () => {
  return (
    <div className='flex w-full sm:w-8/12 sm:h-[450px] md:h-[550px] rounded-lg sm:mt-36 md:mx-72  lg:mt-10 my-10 overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0  px-2'>
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
