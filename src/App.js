import './App.css';
import Courses from './Components/Courses';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Nav from './Components/Nav';
// import Team from './Components/Team';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <BrowserRouter>
      <Nav />
        <Routes>
          {/* <Route exact path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Footer />} /> */}
        {/* </Routes>
      </BrowserRouter> */}
      <Home />
      {/* <Courses /> */}
      {/* <Team /> */}
      {/* <TeamSlider /> */}
      <Footer />
    </div>
  );
}

export default App;