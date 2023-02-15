import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NextHeader from "./Components/NextHeader";
import Content from "./Components/Content";
function App() {
  return (
    <>
    <BrowserRouter>
      <Sidebar />
      <Header />
      <NextHeader />
        <Routes>
          <Route path="content" element={<Content />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
