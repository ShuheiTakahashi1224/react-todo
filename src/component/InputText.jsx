const InputText = (props) => {
  const { placeholder, onChange, value } = props;
  return (
    <input
      onChange={(event) => onChange(event)}
      className="c-input"
      placeholder={placeholder}
      value={value}
    />
  );
};

export default InputText;
