import React from "react";
import { motion } from "framer-motion";
import logo from "../Images/WhatsApp Image 2024-08-01 at 19.50.54_77c8f196.jpg";

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
    <div
      id="b37456c4530be810dc040f50da72eda09addfb0b"
      style={{ minHeight: "50vh", borderRadius: "10px" }}
      className="bg-black container-fluid text-light"
    >
      <motion.div className="row p-5"></motion.div>
      <div className="row d-flex justify-content-md-center justify-content-start text-start text-md-center py-5 pt-5">
        <motion.div
          variants={variant1}
          initial="initial"
          whileInView="animate"
          className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
        >
          <motion.h3 transition={{ duration: 2, delay: 1 }}>
            SPARKTECH
          </motion.h3>
        </motion.div>




        <motion.div
          variants={variant1}
          initial="initial"
          whileInView="animate"
          className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <motion.h3 transition={{ duration: 2, delay: 1 }}>
                SERVICES
              </motion.h3>
              <hr />
            </li>
            <p>Software Development</p>
            <p>UI/UX Designing</p>
            <p>Tech Training</p>
            <p>Tech Writing</p>
          </ul>
        </motion.div>




        <motion.div
          variants={variant1}
          initial="initial"
          whileInView="animate"
          className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <motion.h3 transition={{ duration: 2, delay: 1 }}>
                CONTACT
              </motion.h3>
              <hr />
            </li>
            <p><i className="fas fa-home mr-3"></i> Chennai,Tamil Nadu, India</p>
                 <p><i className="fas fa-envelope mr-3"></i> sparktech197@gmail.com</p>
          </ul>
        </motion.div>
        <motion.div
          variants={variant1}
          initial="initial"
          whileInView="animate"
          className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3"
        >
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <motion.h3 transition={{ duration: 2, delay: 1 }}>
                FOLLOW US
              </motion.h3>
              <hr />
            </li>
            <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#dd4b39' }}
                  href="#!"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#ac2bac' }}
                  href="https://www.instagram.com/sparktech_st?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: '#0082ca' }}
                  href="https://www.linkedin.com/company/sparktech-sparktech/"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
          </ul>
        </motion.div>
        <div className="row">
          <h4 className="">&copy;SparkTech CopyRights Pvt Ltd</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;