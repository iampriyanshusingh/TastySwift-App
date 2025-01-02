import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import AboutPage from "./src/components/about";
import Contact from "./src/components/contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>
  }
]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);


