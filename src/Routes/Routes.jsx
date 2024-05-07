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

const router = createBrowserRouter([
    {
        path : "/",
        element : <Root/>,
        errorElement : <ErorrPage/>,

        children : [
            {
                path : "/",
                element : <HomePage/>,
                loader : ()=> fetch("http://localhost:4000/")
            },

            {
                path : "/all",
                element : <CraftItemAll/>,
                loader : ()=> fetch("http://localhost:4000/")
            },
            
            {
                path : "/addCraft",
                element : <AddCraft/>
            },

            {
                path : "/details/:id",
                element : <CraftDetails/>,
                loader : ({params})=>fetch(`http://localhost:4000/craft/${params.id}`)
                // http://localhost:4000/craft/66371cba60a20a9a3b48dc5a
            },
            {
                path : "/myList",
                element : <MyCraftList/>,
                loader : ()=> fetch("http://localhost:4000/")
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