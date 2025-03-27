export default function Checkbox(props) {
  const { handleChFn, isChecked, fieldName, value, label } = props;
  return (
    <label>
      <input
        type="checkbox"
        onChange={handleChFn}
        checked={isChecked}
        name={fieldName}
        value={value}
      />
      {label}
    </label>
  );
}
