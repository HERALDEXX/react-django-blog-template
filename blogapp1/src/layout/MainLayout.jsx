import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <ToastContainer />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout