import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Plan from "./pages/Plan";
import Home from "./pages/Home";
import Contact from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import getMovieData from './api/GetAPIData';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        
          {
            path: '/',
            element: <Home />
          },
      
          {
            path: '/about',
            element: < About />
          },
      
          {
            path: '/plan',
            element: <Plan />,
            loader:getMovieData,
          },
      
          {
            path: '/contact',
            element: <Contact />
          },
      
      ]
    },
   
  ]);

  // const router =  createBrowserRouter(

  //   createRoutesFromElements(
  //     <>
  //       <Route path='/' element={<Home/>} />
  //       <Route path='/about' element={<About/>} />
  //       <Route path='/plan' element={<Plan/>}/>
  //       <Route path='/contact' element={<Contact/>} />
  //     </>

  //   )
  // );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

