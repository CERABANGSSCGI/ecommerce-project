import { createBrowserRouter } from "react-router"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Products from "./pages/Products"
import SignUp from "./pages/SignUp"


const routes = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/SignIn",
      element:<SignIn/>
    },
    {
      path:"/Products",
      element:<Products/>
    },
    {
      path:"/SignUp",
      element:<SignUp/>
    }
])

export default routes