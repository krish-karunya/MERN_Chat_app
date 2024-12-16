import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, loading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
   await Login({ email, password });

  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto mt-14 lg:w-4/12 '>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <motion.h1
          className='text-3xl font-semibold text-center text-gray-300'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Login
        </motion.h1>

        <form onSubmit={handleSubmit} className='pb-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Email Id</span>
              </label>
              <input
                type='email'
                placeholder='Enter Email'
                className='w-full input input-bordered h-10 bg-gray-800 text-gray-300'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Link
              to='/'
              className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
              {"Don't"} have an account?
            </Link>

            <div>
              <button className='btn btn-block btn-sm mt-2 border-none hover:bg-gray-900  bg-gray-800 text-gray-300'>
                {loading ? (
                  <>
                    <span className='loading loading-spinner loading-md'></span>
                    <p>Loading...</p>
                  </>
                ) : (
                  "Log in"
                )}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};
export default Login;
