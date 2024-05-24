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
import SMAnalysis from "../src/Routes/Port_Routes/Stock_Market_Analysis";
import FFNN from "../src/Routes/Port_Routes/FFNN_derivation";
import MLPythCert from "../src/Routes/Port_Routes/ML_w_Pyth_cert";
import NNDLCert from "../src/Routes/Port_Routes/NN_DL_cert";
import MLMathCert from "../src/Routes/Port_Routes/Math_ML_cert";
import MastersProj from "./Routes/Port_Routes/Masters_proj";
import SMIndicators from "../src/Routes/Port_Routes/Stock_Market_Indicators";


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
            {
                path: "sm_analysis",
                element: <SMAnalysis />,
            },

            {
                path: "ffnn_deriv",
                element: <FFNN />,
            },

            {
                path: "ML_pyth_cert",
                element: <MLPythCert />,
            },

            {
                path: "NN_DL_cert",
                element: <NNDLCert />,
            },

            {
                path: "Math_ML_cert",
                element: <MLMathCert />,
            },

            {
                path: "masters_proj",
                element: <MastersProj />,
            },

            {
                path: "sm_indicators",
                element: <SMIndicators />,
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