// import React from "react";
// import '../App.css';
// import { scrollToSection } from './scrollToSection';
// import logo from '../Images/WhatsApp Image 2024-08-01 at 19.50.54_77c8f196.jpg';
// import { NavLink } from "react-router-dom";

// const Nav = () => {

//     const handleClick = (id) => {
//         scrollToSection(id);
//       };

//   return (
//       <nav class="navbar shadow-sm fixed-top w-100 shadow-lg navbar-expand-lg shadow text-white p-3">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#s"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="navbar-brand fw-bold text-black fw-100">
//             <img style={{width:"40px", height:"40px"}} className="img-fluid mx-2" src={logo} alt="logo" />
//             <a style={{textDecoration:"none", frontWeight:"1000"}} className="text-dark" href="">SparkTech</a></div>
//         <div class="collapse navbar-collapse" id="s">
//           <ul style={{textDecoration:"none"}} class="navbar-nav gap-4 text-white ms-auto">
//             <li class="nav-item">
//               <NavLink style={{textDecoration:"none", color:"white"}} to="/" class="nav-link" 
//               onClick={() => handleClick('home')}
//               href="#70f8bb9a8a5393ef080507a89e4b98d139000d65">
//                 Home
//               </NavLink>
//             </li>
//             {/* <li class="nav-item">
//               <a class="nav-link" 
//               onClick={() => handleClick('about')}
//               href="#6b21fb791ac05170893860c248401cd24a59b732">
//                 About
//               </a>
//             </li> */}
//             <li class="nav-item">
//               <NavLink style={{textDecoration:"none", color:"white"}} to="services" class="nav-link"
//               onClick={() => handleClick('services')}
//               href="#218887269ad5946d9dc53238651c90472884f234">
//                 Services
//               </NavLink>
//             </li>
//             {/* <li class="nav-item">
//               <a class="nav-link"
//               onClick={() => handleClick('team')}
//               href="#b37456c4530be810dc040f50da72eda09addfb0a">
//                 Meet Our Team
//               </a>
//             </li> */}
//             {/* <li class="nav-item">
//               <a class="nav-link"
//               onClick={() => handleClick('contact')}
//               href="#b37456c4530be810dc040f50da72eda09addfb0b">
//                 Contact
//               </a>
//             </li> */}
//           </ul>
//         </div>
//       </nav>
//   );
// };

// export default Nav;




// Nav.js
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Images/WhatsApp Image 2024-08-01 at 19.50.54_77c8f196.jpg';
import Loading from './Loading';

const Nav = () => {
  const [loading, setLoading] = useState(false);
  const [nextPath, setNextPath] = useState(null);
  const navigate = useNavigate();

  const handleClick = (path) => {
    setLoading(true);
    setNextPath(path);
    setTimeout(() => {
      navigate(path);
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {loading && <Loading />}
      <nav className="navbar shadow-sm fixed-top w-100 shadow-lg navbar-expand-lg shadow text-white p-3">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#s"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand fw-bold text-black fw-100">
          <img style={{ width: "40px", height: "40px" }} className="img-fluid mx-2" src={logo} alt="logo" />
          <a style={{ textDecoration: "none", fontWeight: "1000" }} className="text-dark" href="">SparkTech</a>
        </div>
        <div className="collapse navbar-collapse" id="s">
          <ul className="navbar-nav gap-4 text-white ms-auto">
            <li className="nav-item">
              <a style={{ textDecoration: "none", color: "white" }} href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <NavLink style={{ textDecoration: "none", color: "white" }} to="/services" className="nav-link" onClick={() => handleClick('/services')}>
                Services
              </NavLink> */}
              <a style={{ textDecoration: "none", color: "white" }} href="/services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
              <a style={{ textDecoration: "none", color: "white" }} href="/team" className="nav-link"
              // onClick={() => handleClick('/team')}
              >
                Team Members
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;