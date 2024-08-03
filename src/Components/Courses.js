// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import i1 from "../Images/1.png";
// import i2 from "../Images/2.png";

// import items from "./Teams.json";

// function Courses() {
//   const imageMap = {
//     "1.png": i1,
//     "2.png": i2,
//   };

//   return (
//     <div
//       id="b37456c4530be810dc040f50da72eda09addfb0a"
//       className="card-container container-fluid justify-content-center align-items-center text-center d-flex flex-column mb-md-5"
//       style={{ minHeight: "98vh", overflow: "hidden" }}
//     >
//       <h1 className="text-center justify-content-center align-items-center d-flex text-info">Team Members</h1>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ clickable: true }}
//         navigation={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//       >
//         {items.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="card-content justify-content-center align-items-center text-center d-flex">
//               <img
//                 src={imageMap[item.image]}
//                 alt={item.name}
//                 className="card-image"
//               />
//               <div className="card-info">
//                 <h5>{item.name}</h5>
//                 <h6>{item.role}</h6>
//                 <a
//                   href={item.link}
//                   className="linkedin-fab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>LinkedIn</span>
//                 </a>
//               </div>
//               {/* <div className="card-footer">
//                  <a href={item.link} className='linkedin-link' target="_blank" rel="noopener noreferrer">LinkedIn</a>
//               </div> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx>{`
//         .card-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//           box-sizing: border-box;
//         }
//         .swiper-container {
//           width: 100%;
//           height: 100%;
//         }
//         .card-content {
//           position: relative;
//           height: 100%;
//           width: 100%;
//           overflow: hidden;
//           padding: 10px;
//           box-sizing: border-box;
//           transition: transform 0.5s ease;
//         }
//         .card-content:hover {
//           transform: scale(1.05);
//         }
//         .card-image {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//           border-radius: 10px;
//         }
//         .card-info {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: rgba(0, 0, 0, 0.8);
//           color: white;
//           padding: 20px;
//           opacity: 0;
//           transition: opacity 0.5s ease, transform 0.5s ease;
//           text-align: center;
//           transform: translateY(100%);
//         }
//         .card-content:hover .card-info {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .linkedin-fab {
//           position: fixed;
//           bottom: 50px;
//           right: 20px;
//           background: #0a66c2;
//           color: white;
//           border-radius: 30%;
//           width: 70px;
//           text-align: center;
//           height: 50px;
//           display: flex;
//           align-items: start;
//           justify-content: start;
//           font-size: 16px;
//           text-decoration: none;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//         }
//         .linkedin-fab:hover {
//           background: #004182;
//         }

//         .slider-controls {
//           display: flex;
//           justify-content: space-between;
//           position: absolute;
//           bottom: 10px;
//           width: 100%;
//           padding: 0 10px;
//           box-sizing: border-box;
//         }
//         .slider-arrow {
//           font-size: 24px;
//           cursor: pointer;
//           color: #fff;
//         }
//         .swiper-pagination {
//           position: absolute;
//           bottom: 10px;
//           width: 100%;
//           text-align: center;
//         }
//       `}</style>
//       <style jsx>{`
//         @media (max-width: 768px) {
//           .card-container {
//             padding: 10px;
//           }
//           .swiper-container {
//             width: 90%;
//             height: auto;
//           }
//           .card-content {
//             width: 100%;
//             height: auto;
//           }
//         }
//         @media (max-width: 576px) {
//           .linkedin-fab {
//             bottom: 20px;
//             right: 10px;
//             width: 50px;
//             height: 40px;
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Courses;




// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

// import i1 from "../Images/1.png";
// import i2 from "../Images/2.png";

// import items from "./Teams.json";

// function Courses() {
//   const imageMap = {
//     "1.png": i1,
//     "2.png": i2,
//   };

//   return (
//     <div
//       id="b37456c4530be810dc040f50da72eda09addfb0a"
//       className="card-container container-fluid justify-content-center align-items-center text-center d-flex flex-column mb-md-5"
//       style={{ minHeight: "98vh", overflow: "hidden" }}
//     >
//       <h1 className="text-center text-info">Team Members</h1>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ clickable: true }}
//         navigation={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper-container"
//       >
//         {items.map((item) => (
//           <SwiperSlide key={item.id}>
//             <div className="card-content">
//               <img
//                 src={imageMap[item.image]}
//                 alt={item.name}
//                 className="card-image"
//               />
//               <div className="card-info">
//                 <h5>{item.name}</h5>
//                 <h6>{item.role}</h6>
//                 <a
//                   href={item.link}
//                   className="linkedin-fab"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>LinkedIn</span>
//                 </a>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <style jsx>{`
//         .card-container {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//           box-sizing: border-box;
//         }
//         .swiper-container {
//           width: 100%;
//           height: 100%;
//           margin: auto;
//         }
//         .card-content {
//           position: relative;
//           height: 100%;
//           width: 100%;
//           overflow: hidden;
//           padding: 10px;
//           box-sizing: border-box;
//           transition: transform 0.5s ease;
//         }
//         .card-content:hover {
//           transform: scale(1.05);
//         }
//         .card-image {
//           width: 100%;
//           height: auto;
//           object-fit: cover;
//           border-radius: 10px;
//         }
//         .card-info {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           background: rgba(0, 0, 0, 0.8);
//           color: white;
//           padding: 20px;
//           opacity: 0;
//           transition: opacity 0.5s ease, transform 0.5s ease;
//           text-align: center;
//           transform: translateY(100%);
//         }
//         .card-content:hover .card-info {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .linkedin-fab {
//           background: #0a66c2;
//           color: white;
//           border-radius: 5px;
//           padding: 5px 10px;
//           text-align: center;
//           font-size: 16px;
//           text-decoration: none;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
//         }
//         .linkedin-fab:hover {
//           background: #004182;
//         }

//         .swiper-pagination {
//           position: absolute;
//           bottom: 10px;
//           width: 100%;
//           text-align: center;
//         }

//         @media (max-width: 768px) {
//           .card-container {
//             padding: 10px;
//           }
//           .swiper-container {
//             width: 90%;
//             height: auto;
//           }
//           .card-content {
//             width: 100%;
//             height: auto;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Courses;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {motion} from "framer-motion";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import i1 from "../Images/oscar-nord-MuJHwDHbXUk-unsplash.jpg";
import i2 from "../Images/pexels-junior-teixeira-1064069-2047905.jpg";
import i3 from "../Images/olena-bohovyk-dIMJWLx1YbE-unsplash.jpg";

import items from "./Achieve.json";

function Courses() {
  const imageMap = {
    "i1.jpg": i1,
    "i2.jpg": i2,
    "i3.jpg": i3
  };

  const variantsall = {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  return (
    <motion.div
    variants={variantsall}
    initial="initial"
    animate="animate"
    transition={{duration:1}}
      id="b37456c4530be810dc040f50da72eda09addfb0a"
      className="card-container container-fluid justify-content-center align-items-center text-center d-flex flex-column mb-md-5"
      style={{ minHeight: "98vh", overflow: "hidden" }}
    >
      <h1 className="text-center text-info"></h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ clickable: true }}
        navigation={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper-container"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
            variants={variantsall}
            initial="initial"
            animate="animate"
            transition={{duration:1, delay:1}}
            className="card-content">
              <img
                src={imageMap[item.image]}
                alt={item.name}
                className="card-image"
              />
              <div className="card-info">
                <h5>{item.name}</h5>
                <h6>{item.role}</h6>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          box-sizing: border-box;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-content {
          position: relative;
          height: 100%;
          width: 100%;
          max-width: 500px; /* Added max-width to ensure it doesn't stretch too much */
          overflow: hidden;
          padding: 10px;
          box-sizing: border-box;
          transition: transform 0.5s ease;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .card-content:hover {
          transform: scale(1.05);
        }
        .card-image {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 10px;
        }
        .card-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 20px;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.5s ease;
          text-align: center;
          transform: translateY(100%);
        }
        .card-content:hover .card-info {
          opacity: 1;
          transform: translateY(0);
        }

        .linkedin-fab {
          background: #0a66c2;
          color: white;
          border-radius: 5px;
          padding: 5px 10px;
          text-align: end;
          float: right;
          left: 100px;
          margin-bottom:30px;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        .linkedin-fab:hover {
          background: #004182;
        }

        .swiper-pagination {
          position: absolute;
          bottom: 10px;
          width: 100%;
          text-align: center;
        }

        @media (max-width: 768px) {
          .card-container {
            padding: 10px;
            width: 500px;
            height:500px;
          }
          .swiper-container {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .card-content {
            width: 100%;
            height: auto;
            max-width: 90%;
            padding: 0;
            box-sizing: border-box;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Courses;