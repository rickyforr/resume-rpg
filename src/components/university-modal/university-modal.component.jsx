import React from "react";
import "./modal.css";
import image from "./queens.jpg";

const UniversityModal = () => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div>
          <h3>Achievment Unlocked!</h3>
          <h5>Bsc(Honours) Earth Science</h5>
          <p>
            What can I say...I love rocks!. From 2001 - 2005 I attended Queens University in Kingston Ontario and earned my bachelors degree in Earth Science. It was a lot of fun
            and the reason I first moved out to Calgary. Highlights were Geological Field School in Quebec and the Swamp Race. That's where they hide a keg in the swamp and 2 teams
            raced to reach it first, then there was the Swamp Race.
          </p>
        </div>
        <img src={image} style={{ maxHeight: "400px", maxWidth: "200px" }}></img>
      </div>
    </div>
  );
};

export default UniversityModal;
