// This custom hook is created for handling form submission logic
// It will send user data to json-server and navigate back to package page

import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSubmitBooking = () => {
  const navigate = useNavigate();

  // Function to handle booking submission
  const submitBooking = async (values, { resetForm }) => {
    try {
      // Posting form data to db.json (bookings section)
      await axios.post("http://localhost:5000/bookings", values);
      alert("Booking Successful!");
      resetForm();
      // After booking, redirecting to package list page
      navigate("/packages");
    } catch (err) {
      console.error("Error submitting booking", err);
    }
  };

  return submitBooking;
};

export default useSubmitBooking;
