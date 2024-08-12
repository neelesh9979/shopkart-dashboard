import React from "react";

import { createBrowserRouter } from "react-router-dom";

// import components

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        index: true
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
    {
        path: '*',
        element: <PageNotFound />
    }
]);

 export default Router; 