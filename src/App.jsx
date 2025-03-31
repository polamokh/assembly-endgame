import { useState } from "react";
import { languages } from "./languages.js";
import LanguageChips from "./components/LanguageChips";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");
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

  return (
    <main>
      <Header />

      <StatusBar />

      <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />

      <Word value={currentWord} guessedLetters={guessedLetters} />

      <Keyboard
        word={currentWord}
        guessedLetters={guessedLetters}
        onClick={addGuessLetter}
      />

      {isGameOver && <button className="start-game">New Game</button>}
    </main>
  );
}

export default App;
