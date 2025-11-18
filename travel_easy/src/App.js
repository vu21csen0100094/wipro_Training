import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import BookingForm from "./pages/BookingForm";
import { BookingProvider } from "./context/BookingContext";
import ErrorBoundary from "./components/ErrorBoundary";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";

function App() {
  return (
    <ErrorBoundary>
      <BookingProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookingForm />} />
          </Routes>
          <Footer />
        </Router>
      </BookingProvider>
    </ErrorBoundary>
  );
}

export default App;
