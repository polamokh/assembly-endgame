import { languages } from "../languages.js";

export default function LanguageChips() {
  const languageChips = languages.map((lang) => {
    return (
      <span
        key={lang.name}
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
