/** "Create a React App that displays a list of recipes, each containing a name and a list of ingredients. The recipes should be stored in an array called recipes within the component

const recipes = [
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onion', 'Garlic', 'Oregano'],
    },
    {
      name: 'Chicken Alfredo Pasta',
      ingredients: ['Fettuccine pasta', 'Chicken breast', 'Heavy cream', 'Parmesan cheese', 'Garlic'],
    },
    {
      name: 'Vegetarian Stir Fry',
      ingredients: ['Broccoli', 'Carrots', 'Bell peppers', 'Tofu', 'Soy sauce', 'Ginger'],
    },
    
  ];
" */

import React from "react";

const Reciepe = () => {
  const recipes = [
    {
      name: "Spaghetti Bolognese",
      ingredients: [
        "Spaghetti",
        "Ground beef",
        "Tomato sauce",
        "Onion",
        "Garlic",
        "Oregano",
      ],
    },
    {
      name: "Chicken Alfredo Pasta",
      ingredients: [
        "Fettuccine pasta",
        "Chicken breast",
        "Heavy cream",
        "Parmesan cheese",
        "Garlic",
      ],
    },
    {
      name: "Vegetarian Stir Fry",
      ingredients: [
        "Broccoli",
        "Carrots",
        "Bell peppers",
        "Tofu",
        "Soy sauce",
        "Ginger",
      ],
    },
  ];
  return (
    <div>
      <h1>Recieps</h1>
      <ul>
        {recipes.map((recp, index) => (
          <li key={index}>
            <h2>{recp.name}</h2>
            <h3>
              {recp.ingredients.map((ingred, index) => (
                <li key={index}>{ingred}</li>
              ))}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reciepe;

