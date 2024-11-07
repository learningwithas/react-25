import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleOnClick = (getCurrentIdx) => {
    setRating(getCurrentIdx);
  };

  const HandleOnMouseMove = (getCurrentIdx) => {
    setHover(getCurrentIdx);
  };

  const HandleOnMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating flex space-x-1">
      {[...Array(noOfStar)].map((_, idx) => {
        idx += 1;
        return (
          <FaStar
            key={idx}
            size={40}
            className={`cursor-pointer transition-all duration-200 ease-in-out ${
              idx <= (rating || hover)
                ? "text-yellow-400 transform scale-110"
                : "text-gray-500"
            }`}
            onMouseMove={() => HandleOnMouseMove(idx)}
            onMouseLeave={HandleOnMouseLeave}
            onClick={() => handleOnClick(idx)}
          />
        );
      })}
    </div>
  );
};

export default Star;
