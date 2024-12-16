import React from "react";
import { useAuthContext } from "../context/AuthUser";
import { WHATAPP_LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useConversation } from "../store/useConversation";

const Navbar = () => {
  const { authUser } = useAuthContext();
  const navigate = useNavigate();
  const { Logout, loading } = useLogout();
  const { setSelectedConversation } = useConversation();

  return (
    <div
      className='flex justify-between items-center h-20 w-full  rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  px-10
'>
      <div
        className='flex justify-center items-center gap-2 cursor-pointer'
        onClick={() => navigate("/home")}>
        <img src={WHATAPP_LOGO} alt='what-app logo' className='w-14 h-14' />
        <h1 className='text-2xl font-bold text-green-500'>What app</h1>
      </div>
      {authUser && (
        <div className='text-white font-bold text-lg cursor-pointer flex justify-center items-center gap-4 group relative'>
          <h1>
            Welcome <span className='text-green-500 ml-1'>{authUser.name}</span>
          </h1>

          <img
            src={authUser.profilePic}
            alt='profile'
            className='w-10 h-10 rounded-full object-cover object-center'
          />
          <div className=' absolute top-0 right-0 pt-16 hidden group-hover:block z-220'>
            <div className='font-medium w-36 text-[16px] p-2 rounded-lg bg-gray-800 opacity-70 backdrop-blur '>
              <div className='flex flex-col justify-center items-center gap-2 '>
                <p
                  className='hover:text-slate-600 '
                  onClick={() => navigate("/home")}>
                  Home
                </p>
                <hr className='h-1 w-full text-gray-300' />
                <p
                  className='hover:text-slate-600 '
                  onClick={() => navigate("/profile")}>
                  Profile
                </p>
                <hr className='h-1 w-full text-gray-300' />{" "}
                {loading ? (
                  <span className='loading loading-spinner loading-sm'></span>
                ) : (
                  <p
                    className='hover:text-slate-600 '
                    onClick={() => {
                      Logout();
                      setSelectedConversation(null);
                    }}>
                    Logout
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
