import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFoundPage";

export default function AppRoutes() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/search/:searchItem" element={<SearchPage />} />
        <Route path="/auth" element={<LoginPage />} />

      </Routes>
    </BrowserRouter>
  );
}
