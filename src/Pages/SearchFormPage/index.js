/* eslint-disable */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import "./index.css";
import Info from "../../components/UserInfo";

function SearchFormPage() {
  const navigate = useNavigate();
  const [number, setNumber] = useState("");
  const [oneUser, setOneUser] = useState({});
  const info = useSelector((state) => state.users.user);
  const handleChange = (event) => {
    setNumber(event.target.value);
  };
  const one = info.find((user) => user.ticketNumber == number);
  const getInfo = () => {
    setOneUser(one);
  };
  const keyPress = (event) => {
    if (event.key === "Enter") {
      setOneUser(one);
    }
  };
  return (
    <div className="search-top-container">
      <div className="search-container">
        <div className="input-search-container">
          <TextField
            type="text"
            name="search"
            placeholder="Search"
            className="searchPage-input"
            onChange={handleChange}
            value={number}
            onKeyPress={keyPress}
          />
          <button type="button" onClick={getInfo} className="search-btn">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>
        <Button
          icon={faHome}
          onClick={() => navigate("/")}
          classNameBtn="home-btn"
          className="home-icon"
        />
      </div>
      <div>
        <Info user={oneUser} />
      </div>
    </div>
  );
}

export default SearchFormPage;
