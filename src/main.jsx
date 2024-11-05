import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login/login.jsx";
import HomePage from "./pages/HomePage/home.jsx";
import About from "./pages/About/about.jsx";
import Profile from "./pages/Profile/profile.jsx";
import Booking from "./pages/Booking/booking.jsx";

import './index.css'; 
import LoginLayout from "./pages/Login/loginLayout.jsx";
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Outlet /></App>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "booking",
        element: <Booking />,
      }
    ],
  },
  {
    path: "login",
    element: <LoginLayout><Login /></LoginLayout>,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);