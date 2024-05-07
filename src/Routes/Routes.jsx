import { createBrowserRouter } from "react-router-dom";
import Root from "../Component/Root";
import ErorrPage from "../Pages/ErrorPage/ErorrPage";
import HomePage from "../Pages/HomePage/HomePage";
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp";
import AddCraft from "../Pages/AddCraft/AddCraft";
import PrivateRoutes from "./PrivateRoutes";
import CraftDetails from "../Pages/CraftDetails/CraftDetails";
import CraftItemAll from "../Pages/CraftItemAll/CraftItemAll";
import MyCraftList from "../Pages/myCraftList/MyCraftList";
import UpdateCraft from "../Pages/Update/UpdateCraft";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        errorElement : <ErorrPage/>,

        children : [
            {
                path : "/",
                element : <HomePage/>,
                loader : ()=> fetch("https://art-craft-store-server-ruddy.vercel.app/craft")
            },

            {
                path : "/all",
                element : <CraftItemAll/>,
                loader : ()=> fetch("https://art-craft-store-server-ruddy.vercel.app/craft")
            },
            
            {
                path : "/addCraft",
                element : <PrivateRoutes><AddCraft/></PrivateRoutes>
            },

            {
                path : "/details/:id",
                element : <PrivateRoutes><CraftDetails/></PrivateRoutes>,
                loader : ({params})=>fetch(`https://art-craft-store-server-ruddy.vercel.app/craft/${params.id}`)
                // https//art-craft-store-server-ruddy.vercel.app/craft/66371cba60a20a9a3b48dc5a
            },

            {
                path : "/myList",
                element : <PrivateRoutes><MyCraftList/></PrivateRoutes>,
            },

            {
                path : "/update/:id",
                element : <PrivateRoutes><UpdateCraft/></PrivateRoutes>,
                loader : ({params})=> fetch(`https://art-craft-store-server-ruddy.vercel.app/craft/${params.id}`)
            },

            {
                path : "/login",
                element : <Login></Login>
            },

            {
                path : "/signup",
                element : <SignUp></SignUp>
            }
        ]
    }
])


export default router