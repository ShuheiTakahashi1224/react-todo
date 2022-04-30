import Button from "./Button";

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
              <Button onClick={onClick} value={"戻す"} index={index} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompleteTodos;
