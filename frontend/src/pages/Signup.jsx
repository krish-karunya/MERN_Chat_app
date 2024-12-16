import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

const Signup = () => {
  // name, age, gender, email, password
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    password: "",
  });

  const { signUp, loading } = useSignUp();

  const HandleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    await signUp(inputValue);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto mt-14 lg:w-4/12 '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <motion.h1
          className='text-3xl font-semibold text-center text-gray-300'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Sign Up
        </motion.h1>

        <form onSubmit={handleSubmit} className='pb-4'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
              </label>
              <input
                type='text'
                placeholder='John Doe'
                className='w-full input input-bordered  h-10 bg-gray-800 text-gray-300'
                name='name'
                value={inputValue.name}
                onChange={HandleChange}
                required
              />
            </div>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Age</span>
              </label>
              <input
                type='number'
                placeholder='John Doe'
                className='w-full input input-bordered  h-10 bg-gray-800 text-gray-300'
                name='age'
                value={inputValue.age}
                onChange={HandleChange}
                required
              />
            </div>

            <div>
              <label className='label p-2 '>
                <span className='text-base label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='johndoe'
                className='w-full input input-bordered h-10 bg-gray-800 text-gray-300'
                name='email'
                value={inputValue.email}
                onChange={HandleChange}
                required
              />
            </div>

            <div>
              <label className='label'>
                <span className='text-base label-text'>Password</span>
              </label>
              <input
                type='password'
                placeholder='Enter Password'
                className='w-full input input-bordered h-10 bg-gray-800 text-gray-300'
                name='password'
                value={inputValue.password}
                onChange={HandleChange}
                required
              />
            </div>

            <div className='mt-1'>
              <h1>Gender</h1>
              <div className='flex items-center'>
                <div>
                  <input
                    type='radio'
                    name='gender'
                    id='male'
                    value='male'
                    onChange={HandleChange}
                  />
                  <label htmlFor='male' className='ml-2'>
                    Male
                  </label>
                </div>
                <div className='ml-2'>
                  <input
                    type='radio'
                    name='gender'
                    id=' female'
                    value='female'
                    onChange={HandleChange}
                  />
                  <label htmlFor='female' className='ml-2'>
                    Female
                  </label>
                </div>
              </div>
            </div>

            <Link
              to={"/login"}
              className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
              Already have an account?
            </Link>

            <div>
              <button
                className='btn btn-block btn-sm mt-2 border-none hover:bg-gray-900  bg-gray-800 text-gray-300'
                type='submit'>
                {loading ? (
                  <>
                    <span className='loading loading-spinner loading-md'></span>
                    <p>Loading...</p>
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
