import clsx from "clsx";

export default function Word(props) {
  const wordChars = props.value.split("").map((char, index) => {
    const wordSpanClass = clsx({
      "missed-letter": !props.guessedLetters.includes(char) && props.isGameLost,
    });

    return (
      <span key={index} className={wordSpanClass}>
        {props.guessedLetters.includes(char)
          ? char.toUpperCase()
          : props.isGameLost
          ? char.toUpperCase()
          : ""}
      </span>
    );
  });

  return <section className="word">{wordChars}</section>;
}
