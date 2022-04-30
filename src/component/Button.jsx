const Button = (props) => {
  const { onClick, value, index } = props;
  return (
    <button className="c-button" onClick={() => onClick(index)}>
      {value}
    </button>
  );
};

export default Button;
