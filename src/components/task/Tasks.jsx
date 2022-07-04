import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Task } from "./Task";

const reorder = (taskList, startIndex, endIndex) => {
  //タスクを並び変える。

  //列からクリックされた個体を削除＆保持(ID場所を1つ抜き取る動作)
  const remove = taskList.splice(startIndex, 1); //[2,3]
  //移動後の列のIDに0個削除して、抜き取っておいたremoveを追加する
  taskList.splice(endIndex, 0, remove[0]); //[2,1,3]
};

export const Tasks = ({ taskList, setTaskList }) => {
  //onDragEndはresultという引数を持っている
  const handleDrangEnd = (result) => {
    //ドラッグ後のonDragEndで出力されるresultデータを使って、列並べ替えを実行
    //reorderに必要な引数を渡す
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDrangEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

//これらは必須（ライブラリーからの指定）
//{provided.placeholder}
//<div {...provided.droppableProps} ref={provided.innerRef}>
