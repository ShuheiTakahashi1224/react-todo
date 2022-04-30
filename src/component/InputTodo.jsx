import { InputText, Button } from "./index";

const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="c-task p-add_task">
      <InputText
        value={todoText}
        placeholder={"TODOを入力"}
        onChange={onChange}
      />
      <Button value={"追加"} onClick={onClick} />
    </div>
  );
};

export default InputTodo;
