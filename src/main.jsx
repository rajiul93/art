import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCraft from "./Page/AddCraft";
import AllArt from "./Page/AllArt";
import CategoryPage from "./Page/CategoryPage";
import Details from "./Page/Details";
import ErrorPage from "./Page/ErrorPage";
import Home from "./Page/Home";
import Login from "./Page/Login";
import MyArtCraft from "./Page/MyArtCraft";
import Registration from "./Page/Registration";
import Root from "./Page/Root";
import UpdatePage from "./Page/UpdatePage";
import PrivetRout from "./ProtectiveRout/ProtectiveRout";
import AuthProvider from "./Provider/AuthProvider";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader:()=>fetch('https://new-art.vercel.app/coffee')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/all-art",
        element: <AllArt />,
        loader:()=>fetch('https://new-art.vercel.app/craft')

      },
      {
        path: "/my-art-craft",
        element:<PrivetRout><MyArtCraft /></PrivetRout> ,
        loader:()=>fetch('https://new-art.vercel.app/craft')


      },
      {
        path: "/add-craft",
        element:<PrivetRout><AddCraft /></PrivetRout> ,
      },
      {
        path: "/update/:id",
        element:<PrivetRout><UpdatePage /></PrivetRout> ,
        loader:({params})=>fetch(`https://new-art.vercel.app/craft/${params.id}`)
      },
      {
        path: "/coffee-details/:id",
        element:<PrivetRout> <Details /></PrivetRout> ,
        loader:({params})=>fetch(`https://new-art.vercel.app/craft/${params.id}`)
      },
      {
        path: "/category/:categoryName",
        element:  <CategoryPage /> ,
        loader:( )=>fetch(`https://new-art.vercel.app/craft`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
