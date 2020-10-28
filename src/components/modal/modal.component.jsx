import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div>
          <h3>Achievement Unlocked!</h3>
          <h5>{props.title}</h5>
          <p style={{margin: "10px"}}>{props.text}</p>
        </div>
        <img src={props.image} style={{ maxHeight: "400px", maxWidth: "200px" }}></img>
      </div>
    </div>
  );
};

export default Modal;
