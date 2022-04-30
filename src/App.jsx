import { useState } from "react";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodoList, setIncompleteTodoList] = useState([
    "ああああああ",
    "いいいいいいい"
  ]);
  const [completeTodoList, setCompleteTodoList] = useState([
    "ううううううう",
    "えええええええ"
  ]);

  const changeTodoText = (event) => setTodoText(event.target.value);
  const addTask = () => {
    if (todoText === "") return;
    const newTodoList = [...incompleteTodoList, todoText];
    setIncompleteTodoList(newTodoList);
    setTodoText("");
  };

  const deleteTask = (index) => {
    const newTodoList = [...incompleteTodoList];
    newTodoList.splice(index, 1);
    setIncompleteTodoList(newTodoList);
  };
  return (
    <>
      <div className="c-task p-add_task">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          className="c-input"
          onChange={(event) => changeTodoText(event)}
        />
        <button onClick={() => addTask()} className="c-button">
          追加
        </button>
      </div>
      <div className="c-task p-incomplete_task">
        <p className="c-title">未完了のTODO</p>
        <ul className="c-task_list">
          {incompleteTodoList.map((todo, index) => {
            return (
              <li key={todo} className="c-task_list__item">
                <p className="c-task_list__item_name">{todo}</p>
                <button className="c-button">完了</button>
                <button onClick={() => deleteTask(index)} className="c-button">
                  削除
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="c-task p-complete_task">
        <p className="c-title">未完了のTODO</p>
        <ul className="c-task_list">
          {completeTodoList.map((todo) => {
            return (
              <li key={todo} className="c-task_list__item">
                <p className="c-task_list__item_name">{todo}</p>
                <button className="c-button">戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
