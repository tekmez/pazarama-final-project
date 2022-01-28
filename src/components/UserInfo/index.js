import React from "react";
import "./index.css";

function Info({ user }) {
  return (
    <div className="user-info">
      <h2 className="title">
        Name:{" "}
        <span className="info">
          {user.firstName} {user.lastName}
        </span>
      </h2>
      <h2 className="title">
        Age: <span className="info">{user.age}</span>
      </h2>
      <h2 className="title">
        IDN:
        <span className="info">{user.tc}</span>
      </h2>
      <h2 className="title">
        Reason: <span className="info">{user.reason}</span>
      </h2>
      <h2 className="title">
        Address: <span className="info">{user.address}</span>
      </h2>
      <h2 className="title">
        Status: <span className="info">{user.status}</span>
      </h2>
      <h2 className="title">
        Answer: <span className="info">{user.answer}</span>
      </h2>
    </div>
  );
}

export default Info;
