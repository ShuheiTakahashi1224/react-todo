const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className="c-task p-complete_task">
      <p className="c-title">完了のTODO</p>
      <ul className="c-task_list">
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="c-task_list__item">
              <p className="c-task_list__item_name">{todo}</p>
              <button onClick={() => onClick(index)} className="c-button">
                戻す
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
