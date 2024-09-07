import React from "react";
import { motion } from "framer-motion";
import sw from "../Images/4458680.jpg";
import ui from "../Images/5757453.jpg";
import teach from "../Images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import write from "../Images/businessman-s-hand-using-digital-tablet-writing-spiral-notepad-gray-desk.jpg";

export default function Desktop1() {
  const variantsall = {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 5, staggerChildren: 0.2 },
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-white text-center py-5">
      <div className="row mb-5">
        <div className="col-md-8 mt-5 text-center mx-auto">
          <h1 className="mb-4">Our Services</h1>
          <p className="lead">
            We offer a range of high-quality services to help your business
            succeed in the digital world.
          </p>
        </div>
      </div>

      <motion.div
      variants={variantsall}
      initial="initial"
      whileInView="animate"
      transition={{duration:1}}
      className="row mb-5 align-items-center">
        <motion.div
         className="col-md-6 order-md-2">
          <div className="text-center mb-4">
            <img
              style={{ width: "400px", height: "400px" }}
              src={sw}
              className="img-fluid rounded shadow-lg"
              alt="Software Development"
            />
          </div>
        </motion.div>
        <motion.div
        variants={variantsall}
        initial="initial"
        whileInView="animate"
        transition={{duration:1}}
        className="col-md-6 text-white order-md-1">
          <h2 className="mb-3">Software Development</h2>
          <p className="text-white">
            At the heart of our services lies our expertise in crafting bespoke
            software solutions that are as unique as your business. Whether
            you're looking for a custom application, a dynamic website, or a
            mobile app, we have the skills and experience to bring your vision
            to life. Our team of developers works closely with you to understand
            your specific needs, ensuring that the final product is not only
            functional and efficient but also user-friendly and scalable. We
            focus on creating solutions that drive your business forward,
            offering you the competitive edge you need in today's fast-paced
            digital landscape.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
      variants={variantsall}
      initial="initial"
      whileInView="animate"
      transition={{duration:1}}
      className="row mb-5 align-items-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
              src={ui}
              className="img-fluid rounded shadow-lg"
              alt="UI/UX Design"
            />
          </div>
        </div>
        <div className="col-md-6 text-white">
          <h2 className="mb-3">UI/UX Design</h2>
          <p className="">
            Creating an exceptional user experience is at the core of our design
            philosophy. Our UI/UX design team specializes in developing
            intuitive interfaces and visually compelling designs that captivate
            users and enhance their interaction with your digital products.
            Whether it’s for a website, mobile app, or software platform, we
            ensure that every element is thoughtfully crafted to provide a
            seamless, engaging experience. By focusing on both functionality and
            aesthetics, we help your users navigate effortlessly, leading to
            increased satisfaction and long-term loyalty.
          </p>
        </div>
      </motion.div>

      <motion.div
      variants={variantsall}
      initial="initial"
      whileInView="animate"
      transition={{duration:1}}
      className="row mb-5 align-items-center">
        <div className="col-md-6 order-md-2">
          <div className="text-center mb-4">
            <img
              src={teach}
              className="img-fluid rounded shadow-lg"
              alt="Tech Training"
            />
          </div>
        </div>
        <div className="col-md-6 text-white order-md-1">
          <h2 className="mb-3">Tech Training</h2>
          <p className="">
            In today’s rapidly evolving tech environment, staying ahead of the
            curve is essential. Our tech training programs are designed to equip
            you with the knowledge and skills needed to thrive in this dynamic
            landscape. We offer a wide range of workshops and courses covering
            the latest emerging technologies, programming languages, and
            software tools. Whether you're looking to upskill your team or
            advance your own expertise, our hands-on training ensures you gain
            practical experience that can be applied immediately. With our
            guidance, you'll be prepared to excel and innovate, keeping pace
            with industry advancements.
          </p>
        </div>
      </motion.div>

      <motion.div
      variants={variantsall}
      initial="initial"
      whileInView="animate"
      transition={{duration:1}}
      className="row align-items-center">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <img
              src={write}
              className="img-fluid rounded shadow-lg"
              alt="Tech Writing"
            />
          </div>
        </div>
        <div className="col-md-6 text-white">
          <h2 className="mb-3">Tech Writing</h2>
          <p className="">
            Effective communication of complex technology is crucial for both
            experts and novices alike. Our tech writing services are designed to
            transform intricate concepts into clear, concise, and actionable
            content. Whether you need detailed technical documentation,
            insightful blog posts, or step-by-step guides, we ensure that your
            audience can easily understand and engage with the material. Our
            team of skilled writers combines technical expertise with a deep
            understanding of your target audience, producing content that is not
            only informative but also engaging and accessible. From simplifying
            complex processes to showcasing industry innovations, we help you
            connect with your audience through compelling and accurate writing.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
