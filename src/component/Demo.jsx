import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "../component/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
// import Services from "./Services";
// import Aboutus from "./Aboutus";
import Privacy from "./Privacy";

function Demo() {
  const [isLogIn, setIsLogIn] = useState(null);

  const signin = () => {
    setIsLogIn(true);
  };

  const signout = () => {
    setIsLogIn(false);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* private routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute auth={{ isLogIn: true }}>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/privacy"
            element={
              <PrivateRoute auth={{ isLogIn: false }}>
                <Privacy />
              </PrivateRoute>
            }
          ></Route>

          {/* public routes */}
          {/* <Route
            exact
            path="/service"
            element={
              <PrivateRoutes auth={{ isLogIn: false }}>
                <Services />
              </PrivateRoutes>
            }
          ></Route> */}

          {/* <Route
            exact
            path="/about"
            element={
              <PrivateRoutes auth={{ isLogIn: true }}>
                <Aboutus />
              </PrivateRoutes>
            }
          ></Route> */}
          <Route path="/private" element={<PrivateRoute />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Demo;
