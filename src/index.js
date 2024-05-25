import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Routes/root";
import Error from "../src/error-page";
import Portfolio from "../src/Routes/portfolio";
import Contact from "../src/Routes/contact";



const router = createBrowserRouter([
    {
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "port",
                element: <Portfolio />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);