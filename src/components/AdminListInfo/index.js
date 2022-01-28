import React from "react";
import "./index.css";

function AdminListInfo(props) {
  const { users, onClick } = props;
  return (
    <div className="user-form-list">
      <div className="list-navbar">
        <h2 className="nav-title">Name</h2>
        <h2 className="nav-title">Surname</h2>
        <h2 className="nav-title">Age</h2>
        <h2 className="nav-title">IDN</h2>
        <h2 className="nav-title">Reason</h2>
        <h2 className="nav-title">Address</h2>
        <h2 className="nav-title">Date</h2>
        <h2 className="nav-title">Status</h2>
        <h2>Edit</h2>
      </div>
      {users.map((user) => (
        <div className="list">
          <p className="p">{user.firstName}</p>
          <p className="p">{user.lastName}</p>
          <p className="p-age">{user.age}</p>
          <p id="p-ıdn">{user.tc}</p>
          <p className="p">{user.reason}</p>
          <p className="p">{user.address}</p>
          <p className="p">{user.date}</p>
          <p className="p">{user.status}</p>
          <button
            type="button"
            className="info-btn"
            id={user.ticketNumber}
            onClick={onClick}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminListInfo;
