import { useState } from "react";
import { InputTodo, IncompleteTodos, CompleteTodos } from "./component/index";
import "./styles.css";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodoList, setIncompleteTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]);

  const changeTodoText = (event) => setTodoText(event.target.value);

  const addTask = () => {
    if (todoText === "") return;
    if (incompleteTodoList.length >= 5) {
      alert("登録できるTODOは５個までです。");
      setTodoText("");
      return;
    }
    const newTodoList = [...incompleteTodoList, todoText];
    setIncompleteTodoList(newTodoList);
    setTodoText("");
  };

  const deleteTask = (index) => {
    const newTodoList = [...incompleteTodoList];
    newTodoList.splice(index, 1);
    setIncompleteTodoList(newTodoList);
  };

  const completeTask = (index) => {
    const newIncompleteTodoList = [...incompleteTodoList];
    newIncompleteTodoList.splice(index, 1);

    const newCompleteTodoList = [
      ...completeTodoList,
      incompleteTodoList[index]
    ];
    setIncompleteTodoList(newIncompleteTodoList);
    setCompleteTodoList(newCompleteTodoList);
  };

  const backTask = (index) => {
    const newCompleteTodoList = [...completeTodoList];
    newCompleteTodoList.splice(index, 1);

    const newIncompleteTodoList = [
      ...incompleteTodoList,
      completeTodoList[index]
    ];
    setCompleteTodoList(newCompleteTodoList);
    setIncompleteTodoList(newIncompleteTodoList);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={changeTodoText}
        onClick={addTask}
      />
      <IncompleteTodos
        todos={incompleteTodoList}
        onClickComplete={completeTask}
        onClickDelete={deleteTask}
      />
      <CompleteTodos todos={completeTodoList} onClick={backTask} />
    </>
  );
};

export default App;
