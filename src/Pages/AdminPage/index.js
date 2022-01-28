/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  faSignInAlt,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../Redux/Services";
import Button from "../../components/Button";
import "./index.css";
import AdminListInfo from "../../components/AdminListInfo";
import PersonInfo from "../../components/PersonInfo";

function AdminPage() {
  const users = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [person, setPerson] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const click = (event) => {
    const personInfo = users.find(
      (user) => user.ticketNumber == event.target.id
    );
    setPerson(personInfo);
    setShow(true);
  };
  return (
    <div className="admin-top-container">
      <div className="admin-navbar">
        <div className="navbar-title">
          <FontAwesomeIcon icon={faUserAstronaut} className="nav-icon" />
          <h2 className="admin-title">Kodluyoruz</h2>
        </div>
        <Button
          classNameBtn="logout-btn"
          icon={faSignInAlt}
          onClick={() => {
            localStorage.removeItem("admin");
            localStorage.removeItem("password");
            navigate("/");
          } 
          }
        />
      </div>
      <AdminListInfo users={users} onClick={click} />
      {show ? <PersonInfo person={person} /> : null}
    </div>
  );
}

export default AdminPage;
