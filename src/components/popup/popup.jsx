import React from "react";
import PropTypes from "prop-types";
import "./popup.style.css";

const Popup = ({ info, closePopup, imgUrl }) => {
  return (
    <div className="popup-container">
      <div className="popup-text">
        <p>{info.description}</p>
        <img src={imgUrl} alt="Popup Image" />

        <button onClick={closePopup} id="close-popup">
          X
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};
export default Popup;
