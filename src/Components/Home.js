import React, { useEffect, useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
import pc from "../Images/9s8SxaPfsoUTjCgcXOPxC-transformed.png";
import { TypeAnimation } from "react-type-animation";
import Parallax from "./Parallax";
import Team from "./Team";
import Courses from "./Courses";
import Members from "./Members";

const Home = () => {

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  useEffect(() => {
    const bgImage = new Image();
    bgImage.src = "./Images/pexels-joshsorenson-1714208-1.webp";
    bgImage.onload = () => setBgImageLoaded(true);
  }, [])

  useEffect(() => {
    // Timeout to simulate image loading
    const timer = setTimeout(() => setImagesLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const variantsall = {
    initial: { scale: -70, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant1 = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant2 = {
    initial: { y: 400, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant3 = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variantimg = {
    initial: { y: -500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant4 = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  const variant5 = {
    initial: { scale: 0.1, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  return (
    <div 
    // style={{overflow:"hidden", minHeight: "100vh", objectFit: "cover"}} 
    style={{
      overflow: "hidden",
      minHeight: "100vh",
      objectFit: "cover",
      backgroundImage: bgImageLoaded ? 'url("./Images/pexels-joshsorenson-1714208-1.webp")' : "none",
    }}
    className="d-flex flex-column justify-content-center align-items-center text-center">
     (<>
      <div id="70f8bb9a8a5393ef080507a89e4b98d139000d65" className="home container-fluid rounded-5">
        <motion.div className="container-fluid">
          <div className="row">
            <div
              style={{ minHeight: "98vh" }}
              className="col-md-12 flex-column d-flex justify-content-center align-items-center text-center mt-5 my-5 pt-5 py-5 mt-sm-5 my-sm-5 pt-sm-5 py-sm-5"
            >
              <div className="d-flex flex-row">
                <motion.h1
                  className="h11 d-flex justify-content-center align-items-center text-center pt-md-5 py-md-5 pt-sm-5 py-sm-5"
                  variants={variant1}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 1, delay: 1 }}
                >
                  Passion{" "}
                </motion.h1>
                <motion.h1
                  className="h12 d-flex justify-content-center align-items-center text-center pt-5 py-5 pt-sm-5 py-sm-5"
                  variants={variant2}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 1, delay: 1 }}
                >
                  <br /> Meets{" "}
                </motion.h1>
                <motion.h1
                  className="h13 d-flex justify-content-center align-items-center text-center pt-5 py-5 pt-sm-5 py-sm-5"
                  variants={variant3}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 1, delay: 1 }}
                >
                  Innovation <br />
                </motion.h1>
              </div>
              <br />
              <div
                variants={variantsall}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 2, delay: 2 }}
                className="homeintro"
              >
                <div>
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      500,
                      "Empowering Digital Transformation", // initially rendered starting point
                      1000,
                      "Driving Innovation Through Technology",
                      1000,
                      "Building Future-Ready Solutions",
                      1000,
                      "Connecting Ideas with Cutting-Edge Technology",
                      1000,
                      "Transforming Challenges into Opportunities",
                      500,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em", fontWeight: "bold", color:"yellowgreen" }}
                    repeat={Infinity}
                  />
                </div>
                {/* <motion.p variants={variant1} initial="initial"
                transition={{duration:2, delay: 4}}
                whileInView="animate" className="fs-5 phome">
              At SparkTech, we're dedicated to transforming ideas into impactful
              solutions. Join us on a journey to innovate and excel in the
              digital world.
            </motion.p> */}
              </div>
            </div>
            {/* <div className="homeimg col-md-6 d-flex justify-content-center text-center align-items-center">
              <motion.img
                variants={variantimg}
                initial="initial"
                transition={{ duration: 2 }}
                animate="animate"
                className="img-fluid homeimgs"
                src={pc}
                alt="pc"
              />
              {/* adfsdf */}

              {/* dfdrgd */}
            {/* </div>  */}
          </div>
        </motion.div>
      </div>
      <div id="6b21fb791ac05170893860c248401cd24a59b732" style={{maxWidth:"700px", minHeight:""}} className="aboutus container p-5 m-5">
        <motion.h1
        variants={variant4}
        initial="initial"
        whileInView="animate"
        transition={{duration:1}}
        className="text-center pt-5 py-5 text-info abt">About Us<hr /></motion.h1>
        <motion.p
        
        initial="initial"
        whileInView="animate"
        transition={{duration:0.3}}
        className="p-md-2 text-secondary fs-md-5 m-md-2">
          At SparkTech, a dynamic startup in the IT solutions space, we are
          passionate about driving digital transformation with innovative
          technology. Our agile team has been
          dedicated to delivering tailored solutions that address the evolving
          needs of our clients. With a focus on excellence and creativity, we
          offer cutting-edge software development, tech training, and more. As a
          growing company, we are committed to building strong partnerships and
          helping businesses succeed in the ever-changing digital landscape.
          Join us on our journey to make a significant impact through technology
          and innovation.
        </motion.p>
      </div>
      <div className="Parallax">
        <Parallax />
      </div>
      <div className="d-flex justify-content-center align-items-center text-center"><Team /></div>
      {/* <div><Courses /></div> */}
      </>)
    </div>
  );
};

export default Home;