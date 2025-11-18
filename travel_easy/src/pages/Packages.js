// This page will show all travel packages dynamically from db.json file
// I am using axios to fetch the data and useEffect to call it on first load

import React, { useState, useEffect } from "react";
import axios from "axios";
import PackageCard from "../components/PackageCard";

const Packages = () => {
  // Here I created a state to store packages data
  const [packages, setPackages] = useState([]);

  // useEffect runs only one time when page loads
  useEffect(() => {
    // Fetching data from local json-server
    axios
      .get("http://localhost:5000/packages")
      .then((res) => {
        // Storing data in state variable
        setPackages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Available Travel Packages</h2>

      <div className="row">
        {/* Looping through packages array to display each package */}
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} {...pkg} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
