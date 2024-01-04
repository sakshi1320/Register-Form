import React from "react";
import { useFormik } from "formik";
import { signupschema } from "../../schemas";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import money from "./money.svg";

const initialValues = {
  name: "",
  selectedcity: "",
  gender: "",
  selectedcontry: "",
  number: "",
  dateofbirth: "",
  email: "",
  password: "",
  confpassword: "",
};
const Registration = () => {
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
      <div className="row">
        <div className="col-6">
          <div
            className="d-flex justify-content-center align-item-center mt-1"
            style={{ height: "300px", fontFamily: "sans-serif" }}
          >
            <div>
              <div className="container">
                <div>
                  <Link to="/">
                    <div>Go Home</div>
                  </Link>
                </div>
                <div className="logo">
                  <img src={logo}></img>
                </div>
                <div className="heading">
                  <h2>Sign Up</h2>
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <p className="text-dark" style={{ opacity: ".6" }}>
                      Already have an account? <span className="text-primary">Log In</span>
                    </p>
                  </Link>
                </div>
                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="select-block">
                      <lable className="selectlable" htmlFor="city">
                        Sending money from:
                        <select
                          className="form-select opt-block"
                          name="selectedcity"
                          id="city"
                          value={values.selectedcity}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        >
                          <option value="select">select</option>
                          <option value="United state of America">United state of America</option>
                          <option value="India">India</option>
                        </select>
                      </lable>
                      {errors.selectedcity && touched.selectedcity ? (
                        <p className="error">{errors.selectedcity}</p>
                      ) : null}
                    </div>
                    <div className="input-block">
                      <label htmlFor="name" className="input-lable">
                        Name :
                      </label>
                      <input
                        className="form-control opt-block"
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.name && touched.name ? <p className="error">{errors.name}</p> : null}
                    </div>
                    <div className="input-block">
                      <label className="input-lable" htmlFor="gender">
                        Gender
                        <br></br>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="gender"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        &nbsp; Male&nbsp;&nbsp;
                        <input
                          className="form-check-input"
                          type="radio"
                          id="gender"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        &nbsp;Female&nbsp;&nbsp;
                        <input
                          className="form-check-input"
                          type="radio"
                          id="gender"
                          name="gender"
                          value={values.gender}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        &nbsp;Other&nbsp;&nbsp;
                      </label>
                      {errors.gender && touched.gender ? (
                        <p className="error">{errors.gender}</p>
                      ) : null}
                    </div>
                    <div className="input-block-mobile">
                      <div>
                        <lable className="input-lable" htmlFor="country">
                          Contry code:
                          <br></br>{" "}
                          <select
                            className="form-select"
                            name="selectedcontry"
                            id="country"
                            value={values.selectedcontry}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="select">select</option>
                            <option value="United state of America">United state of America</option>
                            <option value="India">India</option>
                          </select>
                        </lable>
                        {errors.selectedcontry && touched.selectedcontry ? (
                          <p className="error">{errors.selectedcontry}</p>
                        ) : null}
                      </div>
                      <div>
                        <label htmlFor="number" className="input-lable">
                          Mobile number:
                        </label>
                        <br></br>
                        <input
                          className="form-control"
                          type="text"
                          name="number"
                          id="number"
                          placeholder="Enter mobile no."
                          value={values.number}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                        {errors.number && touched.number ? (
                          <p className="error">{errors.number}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="input-block"></div>
                    <div className="input-block">
                      <label htmlFor="dateofbirth" className="input-lable">
                        Date of Birth:
                      </label>
                      <input
                        className="form-control opt-block"
                        type="date"
                        name="dateofbirth"
                        id="dateofbirth"
                        placeholder="select date"
                        value={values.dateofbirth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.dateofbirth && touched.dateofbirth ? (
                        <p className="error">{errors.dateofbirth}</p>
                      ) : null}
                    </div>
                    <div className="input-block">
                      <label htmlFor="email" className="input-lable">
                        Email Address
                      </label>
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                      {errors.email && touched.email ? (
                        <p className="error">{errors.email}</p>
                      ) : null}
                    </div>
                    <div className="d-flex justify-content-start align-item-center">
                      <div className="input-block me-2">
                        <label htmlFor="password" className="input-lable">
                          Password
                        </label>
                        <input
                          className="form-control"
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
                      <div className="input-block">
                        <label htmlFor="conf-password" className="input-lable">
                          Confirm-Password
                        </label>
                        <input
                          className="form-control"
                          type="password"
                          name="confpassword"
                          id="confpassword"
                          placeholder="Password"
                          value={values.confpassword}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></input>
                        {errors.confpassword && touched.confpassword ? (
                          <p className="error">{errors.confpassword}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="buttons">
                      <button className="input-btn" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
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
                    We provide fast and simple steps to send money <br></br>to your loved one. With
                    just a few steps, and you<br></br> are done!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
