import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaExclamationTriangle } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../../components/NotFound/NotFound";
import Footer from "../../components/Footer/Footer";


const ErrorPage = () => {
  return (
    <>

    <Navbar></Navbar>
    <NotFound></NotFound>
    <Footer></Footer>
    
    </>
  );
};

export default ErrorPage;
