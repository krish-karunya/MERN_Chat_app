import React from "react";
import { useLogout } from "../hooks/useLogout";

const LogOutButton = () => {
  const { Logout } = useLogout();
  return (
    <div>
      <div className='divider my-2 w-full py-0 '></div>
      <button
        className='px-6 py-2 mb-4 bg-gray-400 text-sm bg-opacity-30 rounded-full text-black font-bold'
        onClick={() => Logout()}>
        Log Out🚪
      </button>
    </div>
  );
};

export default LogOutButton;
