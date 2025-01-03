import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn, setbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" alt="logo" src={LOGO_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus? "✅" :  "🔴"}
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li><Link to="#">Cart</Link></li>
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
