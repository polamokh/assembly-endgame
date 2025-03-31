import clsx from "clsx";

export default function LanguageChips(props) {
  const languageChips = props.languages.map((lang, index) => {
    return (
      <span
        key={lang.name}
        className={clsx({
          lost: index < props.wrongGuessCount,
        })}
        style={{
          color: lang.color,
          backgroundColor: lang.backgroundColor,
        }}
      >
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languageChips}</section>;
}
