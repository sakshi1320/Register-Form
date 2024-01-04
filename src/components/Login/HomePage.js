import logo from "./logo.png";
import "../Login/style.css";
import { Link } from "react-router-dom";
const Mainpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div>
          <header className="d-flex justify-content-around mt-4">
            <div>
              <img src={logo} style={{ height: "70px", width: "200px" }}></img>
            </div>
            <div>
              <Link to="/login">
                <button className="btn btn-white me-2" style={{ border: "solid 2px blue" }}>
                  Login
                </button>
              </Link>

              <Link to="/register">
                <button className="btn btn-primary me-2">Register</button>
              </Link>
            </div>
          </header>
          <body className="mt-3">
            <div className="backgroundimg">
              <div className="img-text">
                <div>
                  <h2 className="text-dark">
                    Experience supar fast<br></br> money transfer<br></br> at a branch near you
                  </h2>
                  <div className="text-dark mt-4">
                    Remit Money with Ease & Simplicity.Get the Best Exchange rates with<br></br>{" "}
                    Multiple Offers to choose from.
                  </div>
                </div>
              </div>
            </div>
          </body>
        </div>
      </div>
    </>
  );
};
export default Mainpage;
