import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import "./style.css";
import { signupschema } from "../../schemas";
import logo from "./logo.png";
import money from "./money.svg";

const initialValues = {
  email: "",
  password: "",
};

export default function Loginpage() {
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } = useFormik({
    initialValues,
    validationSchema: signupschema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-6">
            <div>
              <div>
                {" "}
                <Link to="/">
                  <div>Go Home</div>
                </Link>
              </div>
              <div className="logo">
                <img src={logo} className="mt-5"></img>
              </div>
              <div className="heading">
                <h2>Login</h2>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <p className="text-dark">
                    Don't have an account?<span className="text-primary">sign In</span>{" "}
                  </p>
                </Link>
              </div>
              <div>
                <form
                  onSubmit={handleSubmit}
                  style={{ border: "2px solid white" }}
                  className=" text-white"
                >
                  <div className="input-block">
                    <label htmlFor="email" className="input-lable">
                      User Name :
                    </label>
                    <input
                      className="opt-block"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email ID"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
                  </div>
                  <div className="input-block">
                    <label htmlFor="password" className="input-lable">
                      Password :
                    </label>
                    <input
                      className="opt-block"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></input>
                    {errors.password && touched.password ? (
                      <p className="error">{errors.password}</p>
                    ) : null}
                  </div>
                  <div className="buttons">
                    <button className="input-btn" type="submit" onClick={()=>{alert("login success.")}}>
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div
              className="row justify-content-center align-item-center bg-primary"
              style={{ height: "655px" }}
            >
              <div className="col-12 ">
                <div className="w-100 h-100 text-center mt-5">
                  <img className="w-50" src={money}></img>
                  <div className="mt-1">
                    <h2 className="text-center text-white">
                      Experience Super Fast<br></br> Money Transfer
                    </h2>
                    <div className="text-center text-white mb-5">
                      We provide fast and simple steps to send money <br></br>to your loved one.
                      With just a few steps, and you<br></br> are done!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        {/* </div>
        <div>
          <form
            onSubmit={handleSubmit}
            style={{ border: "2px solid white" }}
            className="p-5 text-white"
          >
            <div>
              <h2 className="text-center mb-3">Login</h2>
            </div>
            <div className="input-block">
              <label htmlFor="email" className="input-lable">
                User Name :
              </label>
              <input
                className="opt-block"
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.email && touched.email ? <p className="error">{errors.email}</p> : null}
            </div>
            <div className="input-block">
              <label htmlFor="password" className="input-lable">
                Password :
              </label>
              <input
                className="opt-block"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              ></input>
              {errors.password && touched.password ? (
                <p className="error">{errors.password}</p>
              ) : null}
            </div>
            <div className="buttons">
              <button className="input-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </>
  );
}
