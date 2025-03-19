// you can declare LanguageItem(props) to receive the property object
// or you can declare LanguageItem({key, value }) to receive the key and value directly
// the second declaration uses the object destructuring feature of ES6

function LanguageItem({key, value }) {
  return (
    <li key={key}>{value}</li>
  );
}

export default LanguageItem;
