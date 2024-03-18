import React from "react";
import Slider_Images from "./Slider_Images";

const Images = () => {
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/500x300?car",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/500x300?mountain",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/500x300?ocean",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/500x300?city",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/500x300?animals",
    },
  ];
  return (
    <div>
      <Slider_Images images={images} />
    </div>
  );
};

export default Images;
