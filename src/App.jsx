import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Admin from "./pages/Admin.jsx";
import HomeCustomer from "./pages/HomeCustomer.jsx";
import PrivateRoute from "./components/comps/PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: (
      <PrivateRoute>
        <Products />
      </PrivateRoute>
    ),
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/HomeCustomer",
    element: (
      <PrivateRoute>
        <HomeCustomer />
      </PrivateRoute>
    ),
  },
  {
    path: "/Admin",
    element: (
      <PrivateRoute role="Admin">
        <Admin />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
