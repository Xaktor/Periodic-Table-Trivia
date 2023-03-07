import React, { useState } from 'react';
import './App.css';

const cardPairs = [
  { question: 'What is the symbol for sodium on the periodic table?', answer: 'Na', category: 'Easy' },
  { question: 'What is the atomic number of oxygen?', answer: '8', category: 'Easy' },
  { question: 'What is the element located directly above helium on the periodic table?', answer: 'Hydrogen', category: 'Medium' },
  { question: 'Which element has the symbol Au?', answer: 'Gold', category: 'Medium' },
  { question: 'What is the name of the family/group containing elements with similar electron configurations to helium?', answer: 'Noble gases', category: 'Hard' },
  { question: 'What is the most abundant element in the universe?', answer: 'Hydrogen', category: 'Hard' },
  { question: 'What is the only element that is a liquid at room temperature and standard pressure?', answer: 'Mercury', category: 'Easy' },
  { question: 'What is the symbol for iron on the periodic table?', answer: 'Fe', category: 'Medium' },
  { question: 'Which element has the highest electronegativity?', answer: 'Fluorine', category: 'Hard' },
  { question: 'What is the name of the family/group containing elements with full valence electron shells?', answer: 'Noble gases', category: 'Medium' },
];

function App() {
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentPair = cardPairs[cardIndex];

  const handleCardClick = () => {
    setShowAnswer(true);
  };

  const handleNextCard = () => {
    setCardIndex(Math.floor(Math.random() * cardPairs.length));
    setShowAnswer(false);
  };

  return (
    <div>
      <header>
        <h1>Periodic Table Trivia</h1>
        <p>Test your knowledge of the elements with these trivia questions!</p>
      </header>
      <div className={`card ${currentPair.category.toLowerCase()}`}>
        <div className="card-header">
          {!showAnswer && (
            <div className="question-box" onClick={handleCardClick}>
              <h1>{currentPair.question}</h1>
            </div>
          )}
          {showAnswer && (
            <div className="answer-box" onClick={handleCardClick}>
              <p>{currentPair.answer}</p>
              {currentPair.image && <img src={currentPair.image} alt="Card" />}
            </div>
          )}
        </div>
        <div className="card-footer">
          {!showAnswer && (
            <p>Click the card to see the answer.</p>
          )}
          {showAnswer && (
            <p>Click the card to see the next question.</p>
          )}
          <p>Question {cardIndex + 1} of {cardPairs.length}</p>
          {showAnswer && (
            <button className="next-card" onClick={handleNextCard}>Next Question</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;