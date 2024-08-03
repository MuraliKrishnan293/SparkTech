import React from 'react';
import i1 from "../Images/1.png";
import i2 from "../Images/2.png";
import items from "./Teams.json";
import { motion } from "framer-motion";

const Members = () => {

  const variantsall = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const varianth = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };


    const imageMap = {
        "1.png": i1,
        "2.png": i2,
      };


  return (
    <div style={{minHeight:"98vh"}} className='members p-5 container'>
        {/* <motion.h1
        variants={varianth}
        initial="initial"
        whileInView="animate"
        transition={{ duration:2}}
        className='text-info text-center mt-md-5 pt-md-5'>Team Crews</motion.h1> */}
        <div className='row d-flex justify-content-center align-items-center text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
          {items.map((item, index) => (
          <div key={index} className='member col'>
            <motion.div
            variants={variantsall}
            initial="initial"
            whileInView="animate"
            transition={{ duration:2}}
            className='card rounded-5'><img
                src={imageMap[item.image]}
                alt={item.name}
                className="card-image rounded-5 card-img"
              />
            <h2>{item.name}</h2>
            <p>{item.role}</p>
            </motion.div>
           
          </div>
        ))}
        </div>
        
    </div>
  )
}

export default Members