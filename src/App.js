import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop"

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Gadgets from "./pages/Gadgets";
import Add from "./pages/Add";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gadgets" element={<Gadgets />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/add" element={<Add />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
