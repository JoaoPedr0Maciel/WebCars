import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import CarDatail from "../pages/car";
import DashBoard from "../pages/dashboard";
import NewCar from "../pages/dashboard/new";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car/:id",
        element: <CarDatail />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/dashboard/new",
        element: <NewCar />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
