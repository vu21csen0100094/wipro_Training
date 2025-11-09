// src/RightSection.jsx
import React from "react";
import Box from "./Box.jsx";
import FeedbackBox from "./FeedbackBox.jsx";

function RightSection() {
  return (
    <aside
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        justifyItems: "center",
        alignItems: "start",
      }}
    >
      {/* First row */}
      <Box
        image="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2tvYWxhcy0xLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6IjEyMDAifX19"
        title="Koala"
        description="A koala is a herbivorous marsupial native to Australia."
      />
      <FeedbackBox />

      {/* Second row (single box spans two columns on smaller screens) */}
      <Box
        image="https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg"
        title="Rabbit"
        description="Rabbits or bunnies are small mammals in the family Leporidae"
        style={{ gridColumn: "span 2" }}
      />

      {/* Second row (single box spans two columns on smaller screens) */}
      <Box
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUXQ2t_dyRuaZ3fvjL5e2N7yRHrcqqznqVg&s"
        title="Green Forest"
        description="Where peace and freshness come alive."
        style={{ gridColumn: "span 2" }}
      />
    </aside>
  );
}

export default RightSection;
