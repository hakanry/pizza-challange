export default function Checkbox(props) {
  const CheckBoxCSS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 17vh;
    flex-wrap: wrap;
    column-gap: 7rem;
    line-height: 2rem;
  `;
  const { handleChFn, isChecked, fieldName, value, label } = props;
  return (
    <CheckBoxCSS>
      <label htmlFor={label}></label>
      <input
        type="checkbox"
        name={fieldName}
        value={value}
        onChange={handleChFn}
        checked={isChecked}
      />
    </CheckBoxCSS>
  );
}
