import React, { useEffect, useState } from "react";
import { GiEgyptianTemple } from "react-icons/gi";
import { ImGift } from "react-icons/im";

const Slider = () => {
  const [images, setImages] = useState([]);
  fetch(`https://picsum.photos/v2/list?page=1&limit=10`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      images.push(data);
    })
    .catch((error) => console.error(error));
  console.log(images);
  images.forEach((data) => {
    console.log(data);
  });
  return (
    <div>
      {images.map((data, index) => {
        return <img src={`${data.download_url}`} alt="" />;
      })}
    </div>
  );
};

export default Slider;
