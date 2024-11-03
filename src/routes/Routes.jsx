import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../Pages/Home";
import Coffees from "../Pages/Coffees";
import Dashboard from "../Pages/Dashboard";
import CoffeeCard from './../components/CoffeeCard';
import CoffeeDetails from "../Pages/CoffeeDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
          {
            path: '/',
            element: <Home/>,
            loader: () => fetch('../categorys.json'),
            children:[
              {
                path: '/',
                element: <CoffeeCard/>,
                loader: () => fetch('../coffees.json'),
              },
              {
                path: '/card/:id',
                element: <CoffeeCard/>,
                loader: () => fetch('../coffees.json'),
              },
            ],
          },
          {
            path: '/coffees',
            element: <Coffees/>,
            loader: () => fetch('../coffees.json'),
          },
          {
            path: '/dashboard',
            element: <Dashboard/>
          },
          {
            path: '/coffee/:id',
            element: <CoffeeDetails/>,
            loader: () => fetch('../coffees.json'),
          }
        ]
    }
])

export default routes;