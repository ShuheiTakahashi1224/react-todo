const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="c-task p-add_task">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        className="c-input"
        onChange={(event) => onChange(event)}
      />
      <button onClick={() => onClick()} className="c-button">
        追加
      </button>
    </div>
  );
};

export default InputTodo;
