import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./utils/scrollToTop"
import { AuthProvider } from "./context/AuthProvider";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Gadgets from "./pages/Gadgets";
import Add from "./pages/Add";
import Registration from "./pages/Registration";
import Project from "./pages/Project";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <ScrollToTop />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gadgets" element={<Gadgets />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/add" element={<Add />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
