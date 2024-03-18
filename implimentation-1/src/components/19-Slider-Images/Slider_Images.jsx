/** "Create a React component for an image slider that allows users to navigate through a collection of images using next and previous buttons. Additionally, provide a visual indicator in the form of circles to allow users to directly select a specific image from the collection.

const images = [
    {
      id: 1,
      url: ""https://source.unsplash.com/500x300?car"",
    },
    {
      id: 2,
      url: ""https://source.unsplash.com/500x300?mountain"",
    },
    {
      id: 3,
      url: ""https://source.unsplash.com/500x300?ocean"",
    },
    {
      id: 4,
      url: ""https://source.unsplash.com/500x300?city"",
    },
    {
      id: 5,
      url: ""https://source.unsplash.com/500x300?animals"",
    },
  ];" */

import React, { useState } from "react";

const Slider_Images = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Function to handle the next image in slider

  return (
    <div>
      <button>Next</button>
      <button>Previous</button>
    </div>
  );
};

export default Slider_Images;
