import clsx from "clsx";
import { getFarewellText } from "../utils.js";

export default function StatusBar(props) {
  const lastGuessedLetter =
    props.guessedLetters[props.guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !props.currentWord.includes(lastGuessedLetter);

  const gameStatusClass = clsx("status-bar", {
    won: props.isGameWon,
    lost: props.isGameLost,
    farewell: !props.isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
    if (!props.isGameOver) {
      if (isLastGuessIncorrect) {
        return (
          <p>
            {getFarewellText(props.languages[props.wrongGuessCount - 1].name)}
          </p>
        );
      }
    }

    if (props.isGameOver) {
      if (props.isGameWon) {
        return (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        );
      } else {
        return (
          <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        );
      }
    }

    return null;
  }

  return <section className={gameStatusClass}>{renderGameStatus()}</section>;
}
