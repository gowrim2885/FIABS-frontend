import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Forecast from "./pages/Forecast";
import RiskSimulation from "./pages/RiskSimulation";
import ResourceAllocation from "./pages/ResourceAllocation";
import AnomalyDetection from "./pages/AnomalyDetection";
import DSS from "./pages/DSS";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/risk" element={<RiskSimulation />} />
            <Route path="/allocation" element={<ResourceAllocation />} />
            <Route path="/anomalies" element={<AnomalyDetection />} />
            <Route path="/dss" element={<DSS />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;