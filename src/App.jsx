import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./page/Home";
import FixLayout from "./layout/FixLayout";
import FluidLayout from "./layout/FluidLayout";
import ResponsiveLayout from "./layout/ResponsiveLayout";
import ResponsiveLayout2 from "./layout/ResponsiveLayout2";
import AdaptiveLayout from "./layout/AdaptiveLayout";
import DeviceDetect from "./layout/DeviceDetect";

// import DeviceDetector from "./page/DeviceDetector";
import SwFront from "./page/Swfront";
import SwAdmin from "./page/Swadmin";
import DreamsFront from "./page/Dreamsfront";

import "./App.css";
import "../src/assets/scss/index.scss";

function LocationDisplay() {
  const location = useLocation();
  const main = location.pathname === "/";

  return main ? (
    <Home />
  ) : (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/FixLayout" element={<FixLayout />} />
      <Route path="/FluidLayout" element={<FluidLayout />} />
      <Route path="/ResponsiveLayout" element={<ResponsiveLayout />} />
      <Route path="/ResponsiveLayout2" element={<ResponsiveLayout2 />} />
      <Route path="/AdaptiveLayout" element={<AdaptiveLayout />} />
      <Route path="/DeviceDetect" element={<DeviceDetect />} />

      {/* <Route path="/DeviceDetector" element={<DeviceDetector />} /> */}
      <Route path="/SwFront" element={<SwFront />} />
      <Route path="/SwAdmin" element={<SwAdmin />} />
      <Route path="/DreamsFront" element={<DreamsFront />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LocationDisplay />
      </div>
    </BrowserRouter>
  );
}

export default App;
