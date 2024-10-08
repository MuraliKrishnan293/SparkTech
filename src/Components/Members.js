// import React, { useEffect, useState } from 'react';
// import i1 from "./MemberImages/MALATHI B.png";
// import i2 from "./MemberImages/naveen v.png";
// import i3 from "./MemberImages/malathi m.png";
// import i4 from "./MemberImages/monish.png";
// import i5 from "./MemberImages/murali.png";
// import i6 from "./MemberImages/sarmisha.png";
// import i7 from "./MemberImages/saranya.png";
// import i8 from "./MemberImages/sahana.png";
// import i9 from "./MemberImages/harsini.png";
// import i10 from "./MemberImages/naveen c.png";
// import items from "./Teams.json";
// import { motion } from "framer-motion";
// import imageCompression from 'browser-image-compression';

// const Members = () => {

//   const variantsall = {
//     initial: { x: -200, opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     transition: { duration: 5, staggerChildren: 0 },
//   };

//   const varianth = {
//     initial: { y: -200, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     transition: { duration: 5, staggerChildren: 0 },
//   };


//     const imageMap = {
//         "i1": i1,
//         "i2": i2,
//         "i3": i3,
//         "i4": i4,
//         "i5": i5,
//         "i6": i6,
//         "i7": i7,
//         "i8": i8,
//         "i9": i9,
//         "i10": i10,
//       };


//   return (
//     <div style={{minHeight:"98vh"}} className='members p-5 container'>
//         <h1
//         variants={varianth}
//         initial="initial"
//         whileInView="animate"
//         transition={{ duration:1}}
//         className='text-info text-center mt-md-5 pt-md-5 text-white my-5 py-5'>Team Crews</h1>
//         <motion.div
//         variants={variantsall}
//         initial="initial"
//         whileInView="animate"
//         transition={{ duration:2}}
//         className='row d-flex justify-content-center align-items-center text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
//           {items.map((item, index) => (
//           <motion.div
//           variants={variantsall}
//             initial="initial"
//             whileInView="animate"
//             transition={{ duration:2}}
//             viewport={{once: true}}
//           key={index} className='member col'>
//             <motion.div
//             // variants={variantsall}
//             // initial="initial"
//             // whileInView="animate"
//             // viewport={{once: true}}
//             transition={{ duration: 0.8, staggerChildren: 0.3, type:"spring", stiffness: 100}}
//             style={{height:"398px"}}
//             className='card te'><img
//                 src={imageMap[item.image]}
//                 alt={item.name}
//                 loading="lazy"
//                 className="card-image card-img"
//               />
//             <h2>{item.name}</h2>
//             <p>{item.role}</p>
//             <p><a href={item.link}
//             style={{textDecoration:"none"}}
//             target="_blank" rel="noopener noreferrer">
//               <i class="fa-brands fa-linkedin fs-1" style={{color:"blue"}}></i>
//             </a>
//             </p>
//             </motion.div>
           
//           </motion.div>
//         ))}
//         </motion.div>
        
//     </div>
//   )
// }

// export default Members

import React, { useState, useEffect } from 'react';
import i1 from "./MemberImages/MALATHI B.png";
import i2 from "./MemberImages/naveen v.png";
import i3 from "./MemberImages/malathi m.png";
import i4 from "./MemberImages/monish.png";
import i5 from "./MemberImages/murali.png";
import i6 from "./MemberImages/sarmisha.png";
import i7 from "./MemberImages/saranya.png";
import i8 from "./MemberImages/sahana.png";
import i9 from "./MemberImages/harsini.png";
import i10 from "./MemberImages/naveen c.png";
import items from "./Teams.json";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Members = () => {
  AOS.init();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Timeout to simulate image loading
    const timer = setTimeout(() => setImagesLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const variantsall = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0 },
  };

  const varianth = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0 },
  };

  const imageMap = {
    "i1": i1,
    "i2": i2,
    "i3": i3,
    "i4": i4,
    "i5": i5,
    "i6": i6,
    "i7": i7,
    "i8": i8,
    "i9": i9,
    "i10": i10,
  };

  return (
    <div style={{ minHeight: "98vh" }} className='members p-5 container'>
      {!imagesLoaded ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <motion.h1
            variants={varianth}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 1 }}
            className='text-info text-center mt-md-5 pt-md-5 text-white my-5 py-5'>
            Team Crews
          </motion.h1>
          <div
            variants={variantsall}
            initial="initial"
            whileInView="animate"
            transition={{ duration: 2 }}
            className='row d-flex justify-content-center align-items-center text-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-4'>
            {items.map((item, index) => (
              <div
                key={index}
                className='member col'>
                <div
                  transition={{ duration: 0.8, staggerChildren: 0.3, type: "spring", stiffness: 100 }}
                  style={{ height: "398px" }}
                  className='card te' data-aos="fade-up" data-aos-duration="1000"
                  data-aos-easing="ease-in-out" data-aos-once="true" data-aos-delay={index*30}>

                  <img
                  style={{objectFit: "cover"}}
                    src={imageMap[item.image]}
                    alt={item.name}
                    loading="lazy"
                    className="card-image card-img"
                  />
                  <h2>{item.name}</h2>
                  <p>{item.role}</p>
                  <p>
                    <a href={item.link}
                      style={{ textDecoration: "none" }}
                      target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin fs-1" style={{ color: "blue" }}></i>
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Members;