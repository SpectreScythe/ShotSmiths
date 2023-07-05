import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import MovieDetails from "./pages/MovieDetails";
import ContactUs from "./pages/ContactUs";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
