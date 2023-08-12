import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Checkout from "../components/Checkout/Checkout";
import Congrats from "../pages/Congrats/Congrats";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"checkout",
                element:<Checkout></Checkout>
            },
            {
                path:"checkout/congrats",
                element:<Congrats></Congrats>
            }
            
        ]
    },

  ]);
