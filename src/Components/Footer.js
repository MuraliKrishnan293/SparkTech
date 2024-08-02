import React from 'react';
import { motion } from "framer-motion";
import logo from '../Images/WhatsApp Image 2024-08-01 at 19.50.54_77c8f196.jpg';

const Footer = () => {
  const variantsall = {
    initial: { x: -70, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant1 = {
    initial: { y: -70, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };


  return (
    <div id="b37456c4530be810dc040f50da72eda09addfb0b" style={{ minHeight: "50vh", borderRadius: "70px" }} className='bg-black container-fluid text-light'>
      <motion.div className='row p-5'><motion.img
      variants={variantsall}
      initial="initial"
      whileInView="animate"
      transition={{ duration: 1, delay: 1 }}
      style={{width:"150px", height:"130px"}} className='rounded-circle img-fluid' src={logo} alt="logo" /></motion.div>
      <div className='row d-flex justify-content-md-center justify-content-start text-start text-md-center py-5 pt-5'>
        <motion.div
        variants={variant1}
        initial="initial"
        whileInView="animate"
        className='col-12 col-md-6 mb-3'>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><motion.h3
            
            transition={{ duration: 2, delay: 1 }}
            >Contact</motion.h3><hr /></li>
            <li>SparkTech</li>
          </ul>
        </motion.div>
        <motion.div
        variants={variant1}
        initial="initial"
        whileInView="animate"
        className='col-12 col-md-6 mb-3'>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><motion.h3
             
             transition={{ duration: 2, delay: 1 }}
            >Email</motion.h3><hr /></li>
            <li>www.sparktech197@gmail.com</li>
          </ul>
        </motion.div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
        <div className='d-flex justify-content-center'>
            <a href="https://www.instagram.com/sparktech_sparktech?igsh=bXRpZmt5MHI2cmg=" className='text-light mx-3' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/company/sparktech-sparktech/" className='text-light mx-3' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;