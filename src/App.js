import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LeakDetailPage from "./pages/LeakDetailPage";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/leak-detail/:idx" element={<LeakDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;