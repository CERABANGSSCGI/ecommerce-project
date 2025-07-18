import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Products",
    element: <Products/>,
  },
  {
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "*",
    element: <ErrorPage/>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
