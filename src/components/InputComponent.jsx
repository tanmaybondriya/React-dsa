function Input({ value, onUpdate }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onUpdate(e.target.value)}
    />
  );
}
export default Input;
