// Build a simple card component and a parent component that renders a list of cards using an array of data. The card component should take the title and content props and display them appropriately.

import React from "react";
import Card_simple from "./Card-simple";

const Card_Parent = () => {
  const data = [
    { title: "Card 1", content: "Content for card 1" },
    { title: "Card 2", content: "Content for card 2" },
    { title: "Card 3", content: "Content for card 3" },
  ];
  return (
    <div>
      <h1>CardList:-</h1>
      <div>
        {data.map((item, index) => (
          <Card_simple key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default Card_Parent;


