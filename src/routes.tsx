import { createBrowserRouter } from "react-router-dom";
import { Register } from "./pages/Register.tsx";
import App from "./App.tsx";
import { Home } from "./pages/Home.tsx";
import { Matches } from "./pages/Matches.tsx";
import { Login } from "./pages/Login.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/matches",
    element: <Matches />
  }
]);