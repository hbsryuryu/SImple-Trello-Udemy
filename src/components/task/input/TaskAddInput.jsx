import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    //被らない唯一のIDを生成して重複を回避
    const taskId = uuid();
    e.preventDefault();

    //カード追加で、入力が無かった時の中断処理
    if (inputText === "") {
      return;
    }
    //カードを追加する。
    //setTaskListの列としてtaskListをすべて展開して入力された関数名inputTextなどを格納する
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
