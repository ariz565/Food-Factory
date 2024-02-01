import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

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
    <div className="app">
      <Header />
      <Outlet />
  </div>
  );
};

const appRouter = createBrowserRouter([
{
  path:"/",
  element:<AppLayout/>,
  children:[
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    // {
    //   path:"/restaurant/:resId",
    //   element:<Restaurant/>,
    // },
  ],
  errorElement:<Error/>,
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(<AppLayout />);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AppLayout />, rootElement);
