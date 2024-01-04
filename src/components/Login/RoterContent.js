import React from "react";
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom";
import Registration  from "./RegistrationSignIn";
import Loginpage from "./LoginPage";
import Mainpage from "./HomePage";
import "../Login/style.css";

const RoutingComponet = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registration  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutingComponet;
