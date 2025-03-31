import clsx from "clsx";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboard = alphabet.split("").map((letter) => {
    const isGuessed = props.guessedLetters.includes(letter);

    const color = clsx(
      !isGuessed ? "normal" : props.word.includes(letter) ? "correct" : "wrong"
      // {
      //   normal: !isGuessed,
      //   correct: isGuessed && props.word.includes(letter),
      //   wrong: isGuessed && !props.word.includes(letter)
      // }
    );

    return (
      <button
        key={letter}
        className={color}
        onClick={() => props.onClick(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboard}</section>;
}
