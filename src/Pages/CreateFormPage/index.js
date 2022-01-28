import React from "react";
import Form from "../../components/Form";
import Menu from "../../components/Menu";
import "./index.css";

function CreateForm() {
  return (
    <div className="create-top-container">
      <div className="form-top-container">
        <Menu />
        <Form />
      </div>
    </div>
  );
}

export default CreateForm;
