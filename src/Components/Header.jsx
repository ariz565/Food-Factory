import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
     <Link to="/" className="logo-container">
  <img className="w-40" src={LOGO_URL} alt="Logo" />
</Link>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


// import { useState } from "react";
// import { LOGO_URL } from "../utils/constants";
// import {Link} from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";

// const Header = () => {
//     const [btnNameReact, setBtnNameReact] = useState("Login");
//     //if no dependency array => useEffect will run after every render
//     //if empty dependency array => useEffect will run only once after initial render
//     //if dependency array has some value => useEffect will run after initial render and after every render if the value of dependency array changes
// const onlineStatus = useOnlineStatus();
// const {loggedInUser} = useContext(UserContext);
//     return (
//         <div className="flex justify-between bg-blue-50">
//             <div className="logo-container">
//                 <Link to ="/" className="logo-link">
//                 <img className="w-40" src={LOGO_URL}  /> </Link>
//                     </div>

//             <div className="flex items-center">
//                 <ul className="flex p-4 m-4">
//                     <l1 className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</l1>
//                     <li className="px-4"><Link to="/">Home</Link></li>
//                     <li className="px-4"><Link to ="/about">About Us</Link></li>
//                     <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
//                     <li className="px-4"><Link to ="/grocery">Grocery</Link></li>
//                     <li className="px-4">Card</li>
//                     <button className="login" onClick={() => {
//                         btnNameReact === "Login"
//                         ? setBtnNameReact("Logout")
//                         : setBtnNameReact("Login");
//                     }}
//                     >
//                     {btnNameReact}</button>
//                     </ul>
//                 </div>
//                 </div>
//     );
// };

// export default Header;