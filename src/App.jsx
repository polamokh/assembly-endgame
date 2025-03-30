import { useState } from "react";
import LanguageChips from "./components/LanguageChips";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  return (
    <main>
      <Header />
      <StatusBar />
      <LanguageChips />
      <Word value={currentWord} />
      <Keyboard />
      <button className="start-game">New Game</button>
    </main>
  );
}

export default App;
