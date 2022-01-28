import React, { useState } from "react";
import { editUser } from "../../Redux/Services";
import Button from "../Button";
import "./index.css";

function PersonInfo(props) {
  const { person } = props;
  const [answer, setAnswer] = useState("");
  const [status2, setStatus2] = useState("pending");
  const handleChange = (event) => {
    setAnswer(event.target.value);
  };
  return (
    <div className="person-update">
      <Button
        text="Reject"
        onClick={() => {
          setStatus2("Rejected");
        }}
        classNameBtn="rejected-btn"
      />
      <Button
        text="Approve"
        onClick={() => {
          setStatus2("Approved");
        }}
        classNameBtn="rejected-btn"
      />
      <textarea
        className="text-area"
        placeholder="You can enter the answer you want to write here."
        onChange={handleChange}
        value={answer}
      />
      <Button
        text="Update"
        onClick={() => {
          editUser(status2, answer, person.id).then(() =>
            window.location.reload()
          );
        }}
        classNameBtn="rejected-btn"
      />
    </div>
  );
}

export default PersonInfo;
