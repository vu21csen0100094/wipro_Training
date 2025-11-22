import React from "react";

/*
  Q1: ProductCard Component
  -----------------------------------
  - This is a reusable card component for a product
  - Receives props: title, price, discount
  - Calculates finalPrice = price - discount
  - Displays all values neatly on the screen
*/

const ProductCard = ({ title, price, discount }) => {

  // Calculate the final price after discount
  const finalPrice = Number(price) - Number(discount);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "12px",
      width: "250px",
      borderRadius: "8px",
      marginBottom: "10px"
    }}>
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      <p>Discount: ₹{discount}</p>
      <hr />
      <strong>Final Price: ₹{finalPrice}</strong>
    </div>
  );
};

export default ProductCard;
