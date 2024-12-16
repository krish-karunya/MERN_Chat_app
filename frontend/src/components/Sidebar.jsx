import React from "react";
import SearchInput from "./SearchInput";
import LogOutButton from "./LogOutButton";
import Conversations from "./Conversations";
// import { RiLogoutBoxLine } from "react-icons/ri";
// import { FaSearch } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 sm:flex flex-col pl-2 min-w-40 text-white md:w-80 hidden '>
      <SearchInput />
      <div className='divider h-1 my-0 py-0'></div>
      <Conversations />
      <div className='mt-auto'>
        <LogOutButton />
      </div>
    </div>
  );
};

export default Sidebar;
