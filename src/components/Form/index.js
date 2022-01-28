import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validationSchema } from "../../Schema/ValidationSchema";
import TextField from "../TextField";
import { postUser } from "../../Redux/Services";
import "./index.css";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        age: "",
        tc: "",
        reason: "",
        address: "",
        date: new Date().toLocaleDateString(),
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(postUser(values)).then(() => navigate("/SuccessfulPage"));
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <div className="inputs-form">
            <TextField
              type="text"
              name="firstName"
              placeholder="Name"
              value={values.firstName}
              onChange={handleChange}
              className="input"
            />
            {errors.firstName && touched.firstName && (
              <span className="f-error">{errors.firstName}</span>
            )}
            <TextField
              type="text"
              name="lastName"
              placeholder="Surname"
              value={values.lastName}
              onChange={handleChange}
              className="input"
            />
            {errors.lastName && touched.lastName && (
              <span className="l-error">{errors.lastName}</span>
            )}
            <TextField
              type="text"
              name="age"
              placeholder="Age"
              value={values.age}
              onChange={handleChange}
              className="input"
            />
            {errors.age && touched.age && (
              <span className="a-error">{errors.age}</span>
            )}
            <TextField
              type="text"
              name="tc"
              placeholder="Identification Number"
              value={values.tc}
              onChange={handleChange}
              className="input"
            />
            {errors.tc && touched.tc && (
              <span className="t-error">{errors.tc}</span>
            )}
            <TextField
              type="text"
              name="reason"
              placeholder="Reason"
              value={values.reason}
              onChange={handleChange}
              className="input"
            />
            {errors.reason && touched.reason && (
              <span className="r-error">{errors.reason}</span>
            )}
            <TextField
              type="text"
              name="address"
              placeholder="Address"
              value={values.address}
              onChange={handleChange}
              className="input"
            />
            {errors.address && touched.address && (
              <span className="ad-error">{errors.address}</span>
            )}
            <TextField type="file" name="file" className="file-input" />
            <button type="submit" className="apply-btn">
              APPLY NOW
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default Form;
