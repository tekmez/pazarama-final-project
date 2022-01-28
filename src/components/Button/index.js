import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

function Button(props) {
  const { text, icon, classNameBtn, className, onClick } = props;
  return (
    <div className="btn-container">
      <button type="button" className={classNameBtn} onClick={onClick}>
        {text}
        <FontAwesomeIcon icon={icon} className={className} />
      </button>
    </div>
  );
}

export default Button;
