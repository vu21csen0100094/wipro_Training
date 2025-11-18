// This component is used to show each destination card on home page
// I am using props to pass image, title and description dynamically

import React from "react";
import PropTypes from "prop-types";

const DestinationCard = ({ title, image, description }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm">
        {/* Showing image of the destination */}
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body">
          {/* Destination name */}
          <h5 className="card-title">{title}</h5>
          {/* Small text about destination */}
          <p className="card-text">{description}</p>
          {/* Simple button for adding to wishlist (for UI purpose only) */}
          <a href="/packages" className="btn wishlist-btn"> Explore Packages </a>
        </div>
      </div>
    </div>
  );
};

// Validating props for better code practice
DestinationCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
};

export default DestinationCard;
