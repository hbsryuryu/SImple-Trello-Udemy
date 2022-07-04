import React from "react";

//jsxファイルはreactでのhtml,xmlなどを明示するためのファイル
//reactがコンパイルする時にjsもjsxも同じなので、気にする必要なし

export const Header = () => {
  return (
    <div>
      <header>
        <h1>Simple TrelloClone</h1>
      </header>
    </div>
  );
};
