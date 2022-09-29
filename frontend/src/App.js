import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardScreen } from "./Screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
