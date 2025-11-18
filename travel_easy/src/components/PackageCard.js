// This component shows details of one travel package
// I am using props to get data from Packages.js file

import React from "react";

const PackageCard = ({ title, image, location, price, duration, description }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        {/* Image of package */}
        <img src={image} className="card-img-top" alt={title} />

        <div className="card-body">
          {/* Title of package */}
          <h5 className="card-title">{title}</h5>
          {/* Short details */}
          <p className="card-text">{description}</p>
          <p className="text-muted">{location}</p>
          <p><strong>Duration:</strong> {duration}</p>
          <p><strong>Price:</strong> ₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
