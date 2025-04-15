import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Navbar from "./Navbar.jsx";
import "./nizam.png";
import Home from "./Home.jsx";
import Section1 from "./Section1.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
import Section4 from "./Section4.jsx";
import Section5 from "./Section5.jsx";
import Section6 from "./Section6.jsx";
import Section7 from "./Section7.jsx";
import Section8 from "./Section8.jsx";
import Section9 from "./Section9.jsx";
import Section10 from "./Section10.jsx";
import Section11 from "./Section11.jsx";
import Section12 from "./Section12.jsx";
import Section13 from "./Section13.jsx";
import Section14 from "./Section14.jsx";

function App() {
const[adminId,setAdminId]=useState(null);
  const [showNav, setShowNav] = useState(false);
  return (
    <Router>
      <header>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      {showNav && <Navbar />}

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Section1" element={<Section1 setAdminId={setAdminId}/>} />
          <Route path="/Section2" element={<Section2 />} />
          <Route path="/Section3" element={<Section3 adminId={adminId}/>} />
          <Route path="/Section4" element={<Section4 adminId={adminId}/>} />
          <Route path="/Section5" element={<Section5 adminId={adminId}/>} />
          <Route path="/Section6" element={<Section6 />} />
          <Route path="/Section7" element={<Section7 />} />
          <Route path="/Section8" element={<Section8 />} />
          <Route path="/Section9" element={<Section9 />} />
          <Route path="/Section10" element={<Section10 />} />
          <Route path="/Section11" element={<Section11 />} />
          <Route path="/Section12" element={<Section12 adminId={adminId}/>} />
          <Route path="/Section13" element={<Section13 />} />
          <Route path="/Section14" element={<Section14 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
