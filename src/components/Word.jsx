export default function Word(props) {
  const wordChars = props.value.split("").map((char, index) => {
    return <span key={index}>{char.toUpperCase()}</span>;
  });

  return <section className="word">{wordChars}</section>;
}
