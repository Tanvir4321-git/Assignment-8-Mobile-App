import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './Home';

import Installation from './Installation';
import Apps from './Apps';
import Error from './Error';
import AppDetails from '../Components/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children:[{
        index:true,
        loader: ()=>fetch('/Data.json'),
        Component: Home
    },
    {
        path:'/app',
         loader: ()=>fetch('/AllApp.json'),
        Component: Apps
    },
    {
        path:'/install',
        loader: ()=>fetch('/AllApp.json'),
        Component: Installation
    },
    {
      path:'/AppDetails/:id',
       loader: ()=>fetch('/AllApp.json'),
      Component:AppDetails
    }


]
  }
]);