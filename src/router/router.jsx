import { Children } from "react";
import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layOuts/MainLayout";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            
        ]
    },

]);