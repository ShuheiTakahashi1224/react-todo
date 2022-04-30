import "./styles.css";

const App = () => {
  return (
    <>
      <div className="c-task p-add_task">
        <input type="text" placeholder="TODOを入力" className="c-input" />
        <button className="c-button">追加</button>
      </div>
      <div className="c-task p-incomplete_task">
        <p className="c-title">未完了のTODO</p>
        <ul className="c-task_list">
          <li className="c-task_list__item">
            <p className="c-task_list__item_name">ああああああああ</p>
            <button className="c-button">完了</button>
            <button className="c-button">削除</button>
          </li>
          <li className="c-task_list__item">
            <p className="c-task_list__item_name">いいいいいいいいいい</p>
            <button className="c-button">完了</button>
            <button className="c-button">削除</button>
          </li>
        </ul>
      </div>
      <div className="c-task p-complete_task">
        <p className="c-title">未完了のTODO</p>
        <ul className="c-task_list">
          <li className="c-task_list__item">
            <p className="c-task_list__item_name">うううううううううう</p>
            <button className="c-button">戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default App;
