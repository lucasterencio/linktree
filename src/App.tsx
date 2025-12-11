import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Admin } from "./pages/admin";
import { Private } from "./routes/Private";
import { NetWork } from "./pages/network";
import { ErrorPage } from "./pages/error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/login",
    element: <Login />
  },

  {
    path: "/admin",
    element: <Private><Admin /></Private>
  },

  {
    path: "/admin/social",
    element: <Private><NetWork /></Private>
  },

  {
    path: "*",
    element: <ErrorPage />
  },
])