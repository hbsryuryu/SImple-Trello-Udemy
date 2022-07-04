import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

function App() {
  return (
    <div className="app">
      <Header />
      <TaskCards />
    </div>
  );
}

//fontawesomeのようなscriptなどの読み込みはpublic/index.htmlに記載する事

export default App;
