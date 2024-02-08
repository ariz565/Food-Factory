import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    //if no dependency array => useEffect will run after every render
    //if empty dependency array => useEffect will run only once after initial render
    //if dependency array has some value => useEffect will run after initial render and after every render if the value of dependency array changes
const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <Link to ="/" className="logo-link">
                <img className="logo" src={LOGO_URL}  /> </Link>
                    </div>

            <div className="nav-items">
                <ul>
                    <l1>Online Status: {onlineStatus ? "✅" : "🔴"}</l1>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to ="/about">About Us</Link></li>
                    <li><Link to ="/contact">Contact Us</Link></li>
                    <li>Card</li>
                    <button className="login" onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >
                    {btnNameReact}</button>
                    </ul>
                </div>
                </div>
    );
};

export default Header;