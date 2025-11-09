// src/App.jsx
import React from "react";
import Header from "./Header.jsx";
import Overview from "./Overview.jsx";
import First from "./First.jsx";
import Footer from "./Footer.jsx";
import RightSection from "./RightSection.jsx"; // ✅ new import

function App() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      {/* Left side — your existing content */}
      <div style={{ flex: 1, marginRight: "2rem" }}>
        <Header />
        <Overview />
        <First name="Rashmita" />
        <Footer />
      </div>

      {/* Right side — new box section */}
      <div style={{ width: "250px" }}>
        <RightSection />
      </div>
    </main>
  );
}

export default App;
