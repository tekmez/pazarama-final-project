import React from "react";
import { Formik } from "formik";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginValidationSchema } from "../../Schema/ValidationSchema";
import TextField from "../../components/TextField";
import "./index.css";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        admin: "",
        password: "",
      }}
      validationSchema={loginValidationSchema}
      onSubmit={(value) => {
        localStorage.setItem("admin", value.admin);
        localStorage.setItem("password", value.password);
        navigate("/AdminPage");
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit}>
          <div className="login-container">
            <TextField
              type="text"
              name="admin"
              placeholder="kodluyoruz"
              className="login"
              value={values.admin}
              onChange={handleChange}
            />
            <TextField
              type="password"
              name="password"
              placeholder="bootcamp159"
              className="login"
              value={values.password}
              onChange={handleChange}
            />
            <div className="login-btn">
              <button type="submit" className="btn">
                LOGİN
                <FontAwesomeIcon icon={faSignInAlt} className="login-icon" />
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginPage;
