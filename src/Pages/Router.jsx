import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from './Root';
import Home from './Home';

import Installation from './Installation';
import Apps from './Apps';
import Error from './Error';

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
        Component: Apps
    },
    {
        path:'/install',
        Component: Installation
    }


]
  }
]);