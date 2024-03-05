import { useState } from "react";
import "./App.css";
import Flashcard from "./components/Flashcard";
import NextButton from "./components/NextButton";

const problems: { question: string; answer: string }[] = [
  {
    question: "question1",
    answer: "answer1",
  },
  {
    question: "question2",
    answer: "answer2",
  },
  {
    question: "question3",
    answer: "answer3",
  },
  {
    question: "question4",
    answer: "answer4",
  },
];

function App() {
  const [currentProblem, setCurrentProblem] = useState(problems[0]);
  const [flipCard, setFlipCard] = useState(false);

  const nextClickHander = () => {
    if (currentProblem === problems[problems.length - 1]) {
      setCurrentProblem(problems[0]);
    } else {
      setCurrentProblem(problems[problems.indexOf(currentProblem) + 1]);
    }
    setFlipCard(false);
  };

  const handleFlipHandler = () => {
    setFlipCard(!flipCard);
  };

  return (
    <div>
      <h1 className="text-7xl m-4">Flashcards</h1>
      <p className="text-3xl">A good way to brush up your skills!</p>
      {flipCard === false ? (
        <Flashcard text={currentProblem.question} event={handleFlipHandler} />
      ) : (
        <Flashcard text={currentProblem.answer} event={handleFlipHandler} />
      )}
      <NextButton event={nextClickHander} />
    </div>
  );
}

export default App;
