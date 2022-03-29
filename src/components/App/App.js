import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import MainPage from "../Pages/MainPage/MainPage";
import InstructionsPage from "../Pages/InstructionsPage/InstructionsPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/instructions" element={<InstructionsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
