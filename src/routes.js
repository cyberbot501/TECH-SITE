import React from 'react'
import { useRoutes } from "react-router-dom";
import LANDINGPAGE from './pages/landing';
import LOGIN from './pages/login'


export default function Router() {
    const routes = useRoutes([
        {
            path: "/",
            element: <LANDINGPAGE />,
            index: true,
          },



          {
            path: "login",
            element: <LOGIN />,
            index: true,
          },

         


        
    ]);
    return routes;
}