import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import { useAuthContext } from "./context/AuthUser";
import Profile from "./pages/Profile";

const App = () => {
  const { authUser } = useAuthContext();
  // console.log(authUser);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={authUser ? <Navigate to={"/home"} /> : <Signup />}
        />
        <Route
          path='/login'
          element={authUser ? <Navigate to={"/home"} /> : <Login />}
        />
        <Route
          path='/home'
          element={authUser ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path='/profile'
          element={authUser ? <Profile /> : <Navigate to={"/login"} />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
