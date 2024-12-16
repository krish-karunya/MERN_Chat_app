import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthUser";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

const Profile = () => {
  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  const [inputs, setInputs] = useState({
    name: authUser.name,
    age: authUser.age,
    password: authUser.password,
    profilePic: authUser.profilePic,
  });
  // name, profilePic,  age, password
  const { updateProfile, loading } = useUpdateProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    await updateProfile(inputs);
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto mt-[40px] lg:w-6/12  '>
      <div className='flex flex-col flex-wrap px-10 py-4 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
        <h1 className='text-gray-400 text-3xl font-bold text-center mb-6'>
          Profile Update Form
        </h1>
        <div className='flex justify-center items-center gap-10  '>
          <div className='w-full px-5 py-5 '>
            <label className='block mb-2 '>
              <span className='text-sky-400'>Username</span>
              <input
                type='text'
                className='mt-1 block w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500'
                placeholder='johndoe'
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              />
            </label>

            <label className='block mb-2'>
              <span className='text-sky-400'>Age</span>
              <input
                type='number'
                className='mt-1 block w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500'
                placeholder='age'
                value={inputs.age}
                onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
              />
            </label>

            <label className='block mb-2'>
              <span className='text-sky-400'>Password</span>
              <input
                type='password'
                className='mt-1 block w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500'
                placeholder='password'
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </label>

            <label className='block mb-2'>
              <span className='text-sky-400'>Image</span>
              <input
                type='text'
                className='mt-1 block w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500'
                placeholder='Image URL...'
                value={inputs.profilePic}
                onChange={(e) =>
                  setInputs({ ...inputs, profilePic: e.target.value })
                }
              />
            </label>

            <div className='flex mt-6 gap-4'>
              <button
                type='button'
                className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600'
                onClick={() => navigate("/home")}>
                Cancel
              </button>
              <button
                className='w-full flex justify-center items-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600'
                type='submit'>
                {loading ? (
                  <>
                    <span className='loading loading-spinner loading-sm'></span>
                    <p>Loading...</p>
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
          <div className='mockup-phone w-8/12 h-1/3 '>
            <div className='camera'></div>
            <div className='display flex justify-center items-center h-[450px]'>
              <div className='artboard artboard-demo phone-1  '>
                {/* profile card */}
                <div className='flex  flex-col justify-center items-center w-52  '>
                  <h1 className='text-2xl font-bold mb-4 underline'>
                    {" "}
                    Your Profile
                  </h1>
                  <div className='flex  flex-col justify-center items-center'>
                    <div>
                      {" "}
                      <img
                        src={inputs.profilePic}
                        alt='Shoes'
                        className='rounded-full h-32 w-32 object-cover mb-8 object-center mr-2'
                      />
                    </div>
                    <div>
                      <ul className='space-y-1 ml-3'>
                        <li className='text-lg font-bold mb-2'>
                          {" "}
                          {inputs.username}
                        </li>
                        <li className='text-xs w-36'>
                          <span className='text-sky-500'>Age:</span>{" "}
                          {inputs.age}
                        </li>
                        <li className='text-xs w-36'>
                          {" "}
                          <span className='text-sky-500'>About:</span>
                          Do your best and leave to god all the rest🕉️
                        </li>
                        <li className='text-xs w-40 flex flex-col mt-2'>
                          {" "}
                          <span className='text-sky-500'>
                            Joined Whatapp at:
                          </span>
                          September 7,2024
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Profile;
