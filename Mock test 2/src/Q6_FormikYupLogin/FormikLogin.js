import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/*
  Q6: Login Form using Formik + Yup validation
  --------------------------------------------------------
  - Email: must be valid format
  - Password: min 6 characters
*/

const schema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const FormikLogin = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("Form Submitted:", values);
      }}
    >
      <Form style={{ display: "flex", flexDirection: "column", width: "250px", gap: "8px" }}>
        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: "red" }} />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: "red" }} />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikLogin;
