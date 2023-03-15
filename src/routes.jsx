import React from 'react'
import { createBrowserRouter, redirect } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'

export const Routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header />,
            children: [
                {
                    index: true,
                    loader: ()=>redirect('Home'),
                },
                {
                    path: "Home",
                    element: <Home />,
                },
                {
                    path: "about",
                    element: null,
                },
                {
                    path: "projects",
                    element: null,
                },
                {
                    path: "contact",
                    element: null,
                }
            ]
        }
    ]

)