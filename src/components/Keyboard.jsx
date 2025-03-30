export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboard = alphabet.split("").map((letter) => {
    return <button key={letter}>{letter.toUpperCase()}</button>;
  });

  return <section className="keyboard">{keyboard}</section>;
}
