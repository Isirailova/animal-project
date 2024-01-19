import React, { useState } from "react";
import { catInfo } from "../../assets/data/animalInfo";
import { dogInfo } from "../../assets/data/animalInfo";
import { horseInfo } from "../../assets/data/animalInfo";
import Popup from "../popup/popup";
import "./animalDetails.style.css";

const AnimalDetails = () => {
  const [isCatOpen, setIsCatOpen] = useState(false);
  const [isDogOpen, setIsDogOpen] = useState(false);
  const [isHorseOpen, setIsHorseOpen] = useState(false);

  const onCatClick = () => {
    setIsCatOpen(!isCatOpen);
    setIsDogOpen(false);
    setIsHorseOpen(false);
  };

  const onDogClick = () => {
    setIsDogOpen(!isDogOpen);
    setIsCatOpen(false);
    setIsHorseOpen(false);
  };

  const onHorseClick = () => {
    setIsHorseOpen(!isHorseOpen);
    setIsCatOpen(false);
    setIsDogOpen(false);
  };

  return (
    <div className="animal-info">
      <div>
        <button onClick={onCatClick}>Cat</button>
        {isCatOpen ? (
          <Popup
            info={catInfo}
            imgUrl={catInfo.imgUrl}
            closePopup={() => setIsCatOpen(false)}
          />
        ) : null}
      </div>
      <div>
        <button onClick={onDogClick}>Dog</button>
        {isDogOpen ? (
          <Popup
            info={dogInfo}
            imgUrl={dogInfo.imgUrl}
            closePopup={() => setIsDogOpen(false)}
          />
        ) : null}
      </div>
      <div>
        <button onClick={onHorseClick}>Horse</button>
        {isHorseOpen ? (
          <Popup
            info={horseInfo}
            imgUrl={horseInfo.imgUrl}
            closePopup={() => setIsHorseOpen(false)}
          />
        ) : null}
      </div>
    </div>
  );
};

export default AnimalDetails;
