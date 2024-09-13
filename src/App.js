import "./App.css";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Members from "./Components/Members";
import Nav from "./Components/Nav";
import Team from "./Components/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Desktop1 from "./Components/NewServices";
import { useEffect, useState } from "react";

function App() {
  const [showTeam, setShowTeam] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTeam(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        {/* <Home /> */}
        <Routes>
          {/* <Home /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Desktop1 />} />
          <Route path="/team" element={<Members />} />
          {/* <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
