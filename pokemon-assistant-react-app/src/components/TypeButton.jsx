function TypeButton({ type, color, onTypeClick }) {
  return (
    <button
      type="button"
      onClick={() => onTypeClick(type)}
      className={`rounded p-6 text-xl font-bold ${color}`}
    >
     {type} Type
    </button>
  );
}

export default TypeButton;