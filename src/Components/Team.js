import React, { useState } from "react";
import { motion } from "framer-motion";
import items from "./Course.json";
import sw from '../Images/4458680.jpg';
import ui from '../Images/5757453.jpg';
import teach from '../Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg';
import write from '../Images/businessman-s-hand-using-digital-tablet-writing-spiral-notepad-gray-desk.jpg';


const Team = () => {


  const variantsall = {
    initial: {
      rotate: 0,
      opacity: 0,
      transform: 'translate(3px, 0px) skew(7deg, 15deg)',
    },
    animate: {
      rotate: 0,
      opacity: 1,
      transform: 'translate(0px, 0px) skew(0deg, 0deg)',
    },
    transition: {
      duration: 0.3,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  };


    const imageMap = {
        "sw.png": sw,
        "ui.png": ui,
        "teach.png":teach,
        "write.png":write
    };
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    const modal = new window.bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
  };

  // const handleClose = () => {
  //   setSelectedItem(null);
  // };

  return (
    <div id="218887269ad5946d9dc53238651c90472884f234" className="teams d-flex align-items-center justify-content-md-center justify-content-center" style={{ position: "relative", borderRadius:"70px", minHeight: "100vh" }}>
      <div className="hello card">
      </div>
        <h1 className="text-center pt-5 my-5 mx-md-5">Our Services</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 d-flex align-items-center justify-content-center g-4 p-5 p-md-5 m-md-5">
        {items.map((item) => (
          <motion.div className="col" key={item.id}>
            <motion.div
            variants={variantsall}
            initial="initial"
            whileInView="animate"
            transition={{duration:2}}
              style={{ cursor: "pointer", height:"250px" }}
              className="card d-flex align-items-center justify-content-center teamcard m-3 p-4"
              onClick={() => handleCardClick(item)}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              
              <h5>{item.title}</h5>
              <h2>{item.subtitle}</h2>
              {/* <img src={item.image} /> */}
              <img src={imageMap[item.image]} alt={item.title} style={{ width: "100px", height: "auto" }} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <div className="modal fade modal-fullscreen" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {selectedItem ? selectedItem.title : "Modal title"}
              </h5>
            </div>
            <div className="modal-body">
              {selectedItem ? (
                <>
                <img 
                      src={imageMap[selectedItem.image]}
                      alt={selectedItem.title} 
                      style={{ width: "100%", height: "auto" }} 
                  />
                  
                  <p><strong>Description: </strong> {selectedItem.description}</p>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;