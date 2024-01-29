import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createRoot} from "react-dom/client";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://22camsa110.netlify.app" target="_blank">
        ExWhyZeD
      </a>
      <i className="fa-solid fa-copyright"></i>
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

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppLayout />);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AppLayout />, rootElement);
