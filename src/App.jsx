import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i class="fa-solid fa-heart"></i>
      <a href="https://22camsa110.netlify.app" target="_blank">
        ExWhyZeD
      </a>
      <i class="fa-solid fa-copyright"></i>
      {year}
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  );
};
//react.Fragment is used to wrap multiple components
//JSX can have only one parent element
const AppLayout = () => {
  return (
    //can use <> </> instead of <React.Fragment> </React.Fragment>
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<AppLayout />, document.getElementById("root"));
