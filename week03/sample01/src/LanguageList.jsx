import LanguageItem from "./LanguageItem.jsx";

function LanguageList({ languages }) {
  return (
    <ul>
      {languages.map((lang) => (
        <LanguageItem key={lang.key} value={lang.value} />
      ))}
    </ul>
  );
}

export default LanguageList;
