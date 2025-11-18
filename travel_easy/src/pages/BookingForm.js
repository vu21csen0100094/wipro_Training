// Booking.js (Final Version)
// Clean UI + Dropdown + Saves to db.json + Formik + Axios

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookingForm = () => {

  const [packages, setPackages] = useState([]);

  // Load package list from db.json
  useEffect(() => {
    axios.get("http://localhost:5000/packages")
      .then(res => setPackages(res.data))
      .catch(err => console.log(err));
  }, []);

  // Validation schema
  const bookingSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    packageId: Yup.string().required("Please choose a package"),
    travelers: Yup.number().min(1).required("Enter number of travelers")
  });

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Booking Form</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          packageId: "",
          travelers: 1
        }}
        validationSchema={bookingSchema}
        onSubmit={(values, { resetForm }) => {
          axios.post("http://localhost:5000/bookings", values)
            .then(() => {
              alert("Booking Successful!");
              resetForm();
            })
            .catch(() => alert("Error saving booking"));
        }}
      >
        {() => (
          <Form className="booking-box">

            <label>Name</label>
            <Field type="text" name="name" className="form-control" />
            <ErrorMessage name="name" className="text-danger" component="div" />

            <label className="mt-3">Email</label>
            <Field type="email" name="email" className="form-control" />
            <ErrorMessage name="email" className="text-danger" component="div" />

            <label className="mt-3">Choose Package</label>
            <Field as="select" name="packageId" className="form-control">
              <option value="">-- Select Package --</option>
              {packages.map(p => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </Field>
            <ErrorMessage name="packageId" className="text-danger" component="div" />

            <label className="mt-3">Travelers</label>
            <Field type="number" name="travelers" className="form-control" />
            <ErrorMessage name="travelers" className="text-danger" component="div" />

            <button type="submit" className="btn submit-btn mt-4">
              Submit
            </button>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
