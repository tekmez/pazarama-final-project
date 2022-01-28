import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import "./index.css";

function SuccessfulPage() {
  const [ticketNum, setTicketNum] = useState("");
  const navigate = useNavigate();
  const ticketNumber = async () => {
    const number = await useSelector((state) => state.users.user);
    const numArr = [...number];
    const last = numArr[numArr.length - 1];
    const num = await last.ticketNumber;
    return setTicketNum(num);
  };
  ticketNumber();
  return (
    <div className="success-top-container">
      <img src="/check-mark.png" alt="mark" />
      <h2 className="sucses-text">Form created successfully</h2>
      <div className="number-area">
        <p className="number-text">You can check with this ticket number:</p>
        <h4 className="number">{ticketNum}</h4>
      </div>
      <Button
        icon={faHome}
        classNameBtn="home-btn"
        className="home-icon"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default SuccessfulPage;
