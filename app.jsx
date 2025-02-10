import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./src/utils/UserContext";

//chunking
//Code Splitting
// Dynamic Bundling
//Lazy loading
//on demand laoding
//dynamic loading

const AboutPage = lazy(() => import("./src/components/About"));
const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Priyanshu",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header /> <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
