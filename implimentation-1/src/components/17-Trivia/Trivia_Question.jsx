/** "Create a React app that displays two buttons, each containing a trivia question. When a user clicks on a button, an alert should appear with the answer to the corresponding question. The app should have a list of at least two trivia questions and answers that it can use to populate the buttons. The questions and answers can be about any topic, such as geography, history, science, or general knowledge.
  const triviaData = [
    {
      question: ""What is the capital of France?"",
      answer: ""Paris"",
    },
    {
      question: ""In what year did the Titanic sink?"",
      answer: ""1912"",
    },
    // Add more trivia questions and answers as needed
  ];" */

import React from "react";

const Trivia_Question = () => {
  const triviaData = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "In what year did the Titanic sink?",
      answer: "1912",
    },
    {
      question: "Rcb Stand For?",
      answer: "Royal Challengers Banglore",
    },
    // Add more trivia questions and answers as needed
  ];

  const handleClick = (answer) => {
    alert(answer);
  };

  return (
    <>
      {triviaData.map((data, index) => (
        <div key={index}>
          <button onClick={() => handleClick(data.answer)}>
            {data.question}
          </button>
        </div>
      ))}
    </>
  );
};

export default Trivia_Question;

