import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  const handleClick = () => {
    setIsClick(true);
  };

  //eはeventの略でreactで実行されたデータが返ってくる
  //

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmitのページ更新機能をOFFへ
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  //onSubmitはエンター押したら関数名を呼ぶ
  //onChangeは内容が変更されるたびに関数名を呼ぶ
  //onBlurはinput選択中に別のところをクリックしてキャンセルしたら関数名を呼ぶ
  //autoFocusは選択と同時に文字入力状態にする

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};
