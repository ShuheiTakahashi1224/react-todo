import Button from "./Button";

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
              <Button value={"完了"} onClick={onClickComplete} index={index} />
              <Button value={"削除"} onClick={onClickDelete} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IncompleteTodos;
