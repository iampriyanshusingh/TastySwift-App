import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      <div className="flex justify-between shadow-lg mb-2 bg-[#f7efdc]">
        <div className="logo-container">
          <img className="w-48 " alt="logo" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex m-8 p-4">
            <li className="px-4">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>

            <li className="px-4 hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 hover:underline">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-4 hover:underline">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-4 hover:underline font-semibold">
              <Link to="/Cart">Cart ({cartItems.length} items)</Link>
            </li>
            <li className="px-4 hover:underline">
              <Link to="/grocery">Grocery</Link>
            </li>
            <button
              className="px-4 hover:underline"
              onClick={() => {
                btn === "Login" ? setbtn("Logout") : setbtn("Login");
              }}
            >
              {btn}
            </button>
            <li className="px-4 font-bold">
              <Link to="#">{loggedInUser}</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
