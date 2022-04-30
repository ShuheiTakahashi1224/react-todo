const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="c-task p-incomplete_task">
      <p className="c-title">未完了のTODO</p>
      <ul className="c-task_list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="c-task_list__item">
              <p className="c-task_list__item_name">{todo}</p>
              <button
                onClick={() => onClickComplete(index)}
                className="c-button"
              >
                完了
              </button>
              <button onClick={() => onClickDelete(index)} className="c-button">
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
