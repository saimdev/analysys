import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Demo from "./pages/Demo";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
