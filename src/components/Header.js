import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [btn, setbtn] = useState("Login");
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" alt="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT US</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li>CART</li>
            <button
              className="login-btn"
              onClick={() => {
                btn === "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
