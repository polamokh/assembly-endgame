import { useState } from "react";
import { languages } from "./languages.js";
import LanguageChips from "./components/LanguageChips";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";
import { getRandomWord } from "./utils.js";
import Conffeti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  function addGuessLetter(letter) {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter]
    );
  }

  function startNewGame() {
    setGuessedLetters(() => []);
    setCurrentWord(() => getRandomWord());
  }

  return (
    <main>
      {isGameWon && <Conffeti />}
      
      <Header />

      <StatusBar
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        languages={languages}
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        wrongGuessCount={wrongGuessCount}
      />

      <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />

      <Word
        value={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <Keyboard
        word={currentWord}
        guessedLetters={guessedLetters}
        isGameOver={isGameOver}
        onClick={addGuessLetter}
      />

      {isGameOver && (
        <button className="start-game" onClick={startNewGame}>
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
